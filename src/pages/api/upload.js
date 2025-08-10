import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import formidable from "formidable";
import * as XLSX from "xlsx";

// Disable Next.js body parsing to handle multipart/form-data
export const config = {
	api: {
		bodyParser: false,
	},
};

const s3Config = {
	region: process.env.NEXT_PUBLIC_AWS_REGION,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
	},
};
const s3Bucket = process.env.NEXT_PUBLIC_AWS_S3_BUCKET;

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const form = formidable({ multiples: true });

	try {
		const { fields, files } = await new Promise((resolve, reject) => {
			form.parse(req, (err, fields, files) => {
				if (err) reject(err);
				resolve({ fields, files });
			});
		});

		// Extract single values from fields (formidable returns arrays)
		const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
		const firstName = Array.isArray(fields.firstName) ? fields.firstName[0] : fields.firstName;
		const lastName = Array.isArray(fields.lastName) ? fields.lastName[0] : fields.lastName;

		// Create S3 folder name: firstName_lastName_email
		const folder = `${firstName} ${lastName}_${email.replace(/[@.]/g, "_")}`.replace(/\s+/g, "_");
		const s3 = new S3Client(s3Config);
		const fileUrls = [];

		// Upload user files to S3
		if (files.files) {
			const userFiles = Array.isArray(files.files) ? files.files : [files.files];
			for (const file of userFiles) {
				const fileName = `${folder}/${Date.now()}-${file.originalFilename}`;
				const fileBody = require("fs").readFileSync(file.filepath);

				const params = {
					Bucket: s3Bucket,
					Key: fileName,
					Body: fileBody,
					ContentType: file.mimetype,
					ACL: "public-read",
				};
				const command = new PutObjectCommand(params);
				await s3.send(command);
				fileUrls.push(`https://${s3Bucket}.s3.${s3Config.region}.amazonaws.com/${fileName}`);
			}
		}

		// Generate Excel file with updated file URLs
		const worksheetData = [{
			Email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
			"First Name": Array.isArray(fields.firstName) ? fields.firstName[0] : fields.firstName,
			"Last Name": Array.isArray(fields.lastName) ? fields.lastName[0] : fields.lastName,
			"Personal Information": Array.isArray(fields.personalInfo) ? fields.personalInfo[0] : fields.personalInfo,
			"Date of Birth": Array.isArray(fields.dob) ? fields.dob[0] : fields.dob,
			Sex: Array.isArray(fields.sex) ? fields.sex[0] : fields.sex,
			Practitioner: Array.isArray(fields.practitioner) ? fields.practitioner[0] : fields.practitioner,
			Address: Array.isArray(fields.address) ? fields.address[0] : fields.address,
			City: Array.isArray(fields.city) ? fields.city[0] : fields.city,
			"Postal Code": Array.isArray(fields.postalCode) ? fields.postalCode[0] : fields.postalCode,
			"Province/State": Array.isArray(fields.province) ? fields.province[0] : fields.province,
			"Cancer Stage": Array.isArray(fields.cancerStage) ? fields.cancerStage[0] : fields.cancerStage,
			"Cancer Type": Array.isArray(fields.cancerType) ? fields.cancerType[0] : fields.cancerType,
			"Other Treatments": Array.isArray(fields.otherTreatments) ? fields.otherTreatments[0] || "" : fields.otherTreatments || "",
			"Other Medications": Array.isArray(fields.otherMedications) ? fields.otherMedications[0] || "" : fields.otherMedications || "",
			"File URLs": fileUrls.join(", "),
		}];
		const worksheet = XLSX.utils.json_to_sheet(worksheetData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
		const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });

		// Upload Excel file to S3
		const excelFileName = `${folder}/FormData_${Date.now()}.xlsx`;
		const excelParams = {
			Bucket: s3Bucket,
			Key: excelFileName,
			Body: excelBuffer,
			ContentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			ACL: "public-read",
		};
		const excelCommand = new PutObjectCommand(excelParams);
		await s3.send(excelCommand);
		const excelUrl = `https://${s3Bucket}.s3.${s3Config.region}.amazonaws.com/${excelFileName}`;

		res.status(200).json({ fileUrls, excelUrl });
	} catch (err) {
		console.error("Error uploading to S3:", err);
		res.status(500).json({ message: "Error uploading files or Excel" });
	}
}