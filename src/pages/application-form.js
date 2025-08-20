import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useForm } from "react-hook-form";
import * as XLSX from "xlsx";

const OrderNow = () => {
	const [files, setFiles] = useState([]);
	const [uploadedUrls, setUploadedUrls] = useState([]);
	const [uploading, setUploading] = useState(false);
	const fileRef = useRef(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		mode: "onBlur",
	});

	const onClickUpload = (e) => {
		e.preventDefault();
		fileRef.current.click();
	};

	const handleFileChange = (e) => {
		const selectedFiles = Array.from(e.target.files);
		setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
	};

	// Generate Excel file from form data
	const generateExcel = (data, fileUrls) => {
		const worksheetData = [{
			Email: data.email,
			"First Name": data.firstName,
			"Last Name": data.lastName,
			"Date of Birth": data.dob,
			Sex: data.sex,
			Practitioner: data.practitioner,
			Address: data.address,
			City: data.city,
			"Postal Code": data.postalCode,
			"Province/State": data.province,
			"Cancer Stage": data.cancerStage,
			"Cancer Type": data.cancerType,
			"Other Treatments": data.otherTreatments || "",
			"Other Medications": data.otherMedications || "",
			"File URLs": fileUrls.join(", "),
		}];
		const worksheet = XLSX.utils.json_to_sheet(worksheetData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
		return XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
	};

	const onSubmitForm = async (data) => {
		setUploading(true);
		try {
			const formData = new FormData();
			// Append form data
			Object.keys(data).forEach(key => formData.append(key, data[key]));
			// Append files
			files.forEach(file => formData.append("files", file));
			// Generate and append Excel file
			const excelBuffer = generateExcel(data, []);
			const excelBlob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
			formData.append("excel", excelBlob, `FormData_${Date.now()}.xlsx`);

			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Upload failed");
			}

			const { fileUrls, excelUrl } = await response.json();
			setUploadedUrls([...fileUrls, excelUrl]);

			alert(`Form submitted successfully! Excel file uploaded: ${excelUrl}`);
		} catch (err) {
			console.error("Error processing form:", err);
			alert("Error uploading files or Excel. Please try again.");
		}
		setUploading(false);
	};

	return (
		<div>
			<Navbar />
			<div className="container my-16">

				<Image
					src="/video/application-ban.jpg"
					alt="Banner"
					className="w-[80%] mx-auto"
					width={1517}
					height={188}
				/>
				<video className="w-full my-8" autoPlay playsInline loop controls muted>
					<source src="/video/video-1.mp4" type="video/mp4" />
				</video>
				<p className="pb-8 text-center">Global News on, Aug 8, on UW finds promising anti-cancer potential in black maitake mushroom extract</p>
				<div className="lg:w-[80%] w-full mx-auto text-sm text-gray-700 bg-limebg lg:p-20 sm:p-12 p-6">
					<p className="text-right text-greyblack2">Free Sample Period : Aug 11  -  Sep 10</p>
					<h2 className="text-green text-center 2xl:text-5xl text-3xl lg:py-20 py-12">
						REQUEST APPLICATION FOR <span className="block">FREE SHOGUN BLACK MAITAKE PROTHERA & EX TABLET SAMPLES</span>
					</h2>
					<div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
						<h5 className="text-grey 2xl:text-4xl text-2xl">CREATE YOUR ACCOUNT</h5>
						<p className="text-greyblack2">*Sign-In Information *All Fields Are Required</p>
					</div>
					<form className="bg-white lg:p-12 p-4 mt-4 mb-16 application-form" onSubmit={handleSubmit(onSubmitForm)}>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label className="2xl:text-xl text-base">Email *</label>
							</div>
							<div className="col-span-5 ">
								<input
									type="email"
									placeholder="Write your Email"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email address",
										},
									})}
								/>
								{errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label className="whitespace-nowrap">Confirm Email *</label>
							</div>
							<div className="col-span-4">
								<input
									type="email"
									placeholder="Confirm Email"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("confirmEmail", {
										required: "Confirm Email is required",
										validate: (value) => value === watch("email") || "Emails do not match",
									})}
								/>
								{errors.confirmEmail && <p className="text-red-500 text-xs">{errors.confirmEmail.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label>Password *</label>
							</div>
							<div className="col-span-4">
								<input
									type="password"
									placeholder="Write your Password"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters",
										},
									})}
								/>
								{errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label className="whitespace-nowrap">Confirm Password *</label>
							</div>
							<div className="col-span-4">
								<input
									type="password"
									placeholder="Confirm Password"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("confirmPassword", {
										required: "Confirm Password is required",
										validate: (value) => value === watch("password") || "Passwords do not match",
									})}
								/>
								{errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-2 items-center mb-4 lg:gap-12 gap-2">
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">First name *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="Write your First name"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("firstName", { required: "First name is required" })}
									/>
									{errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
								</div>
							</div>
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Last name *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="Write your Last name"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("lastName", { required: "Last name is required" })}
									/>
									{errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
								</div>
							</div>
						</div>
						<div className="grid lg:grid-cols-2 items-center mb-4 lg:gap-12 gap-2">
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Date of Birth *</label>
								</div>
								<div className="col-span-4">
									<input
										type="date"
										placeholder=""
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("dob", { required: "Date of Birth is required" })}
									/>
									{errors.dob && <p className="text-red-500 text-xs">{errors.dob.message}</p>}
								</div>
							</div>
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label>Sex *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="Write your Sex"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("sex", { required: "Sex is required" })}
									/>
									{errors.sex && <p className="text-red-500 text-xs">{errors.sex.message}</p>}
								</div>
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-2">
								<label className="whitespace-nowrap">Naturopath / Healthcare Practitioner *</label>
							</div>
							<div className="col-span-4">
								<input
									type="text"
									placeholder="Name"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("practitioner", { required: "This field is required" })}
								/>
								{errors.practitioner && <p className="text-red-500 text-xs">{errors.practitioner.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-2">
								<label className="whitespace-nowrap">Hospital / Clinic *</label>
							</div>
							<div className="col-span-4">
								<input
									type="text"
									placeholder="Write your Hospital / Clinic"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("hospital", { required: "This field is required" })}
								/>
								{errors.hospital && <p className="text-red-500 text-xs">{errors.hospital.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-2">
								<label className="whitespace-nowrap">Residential Shipping address *</label>
							</div>
							<div className="col-span-4">
								<input
									type="text"
									placeholder="Write your Residential Shipping address"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("address", { required: "Address is required" })}
								/>
								{errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
							</div>
						</div>
						<hr className="my-12"></hr>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label className="whitespace-nowrap">City *</label>
							</div>
							<div className="col-span-5">
								<input
									type="text"
									placeholder="Write your City"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("city", { required: "City is required" })}
								/>
								{errors.city && <p className="text-red-500 text-xs">{errors.city.message}</p>}
							</div>
						</div>
						<div className="grid lg:grid-cols-2 items-center lg:gap-12">
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Postal code *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="write your postal code"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("postalCode", { required: "Postal code is required" })}
									/>
									{errors.postalCode && <p className="text-red-500 text-xs">{errors.postalCode.message}</p>}
								</div>
							</div>
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Province / State *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="Write your Province / State"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("province", { required: "Province/State is required" })}
									/>
									{errors.province && <p className="text-red-500 text-xs">{errors.province.message}</p>}
								</div>
							</div>
						</div>
						<div className="grid lg:grid-cols-2 items-center lg:gap-12 gap-2">
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center mb-4 lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Cancer stage *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="write your cancer stage"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("cancerStage", { required: "Cancer stage is required" })}
									/>
									{errors.cancerStage && <p className="text-red-500 text-xs">{errors.cancerStage.message}</p>}
								</div>
							</div>
							<div className="grid lg:grid-cols-6 lg:grid-flow-col items-center lg:gap-12 gap-2">
								<div className="col-span-2">
									<label className="whitespace-nowrap">Cancer Type *</label>
								</div>
								<div className="col-span-4">
									<input
										type="text"
										placeholder="Write your cancer type"
										className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
										{...register("cancerType", { required: "Cancer type is required" })}
									/>
									{errors.cancerType && <p className="text-red-500 text-xs">{errors.cancerType.message}</p>}
								</div>
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-1">
								<label className="whitespace-nowrap">Other Treatments *</label>
							</div>
							<div className="col-span-5">
								<input
									type="text"
									placeholder="Write your Other Treatments"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("otherTreatments")}
								/>
							</div>
						</div>
						<div className="grid lg:grid-cols-6 items-center mb-4 lg:gap-12 gap-2">
							<div className="col-span-2">
								<label className="whitespace-nowrap">Other medications taking *</label>
							</div>
							<div className="col-span-4">
								<input
									type="text"
									placeholder="Write Here"
									className="text-sm w-full border-0 border-b border-gray-300 focus:border-gray-600 focus:outline-none focus:shadow-none focus:ring-0 focus:ring-transparent placeholder-gray-400 px-1 py-1 bg-transparent"
									{...register("otherMedications")}
								/>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row justify-center md:py-12 py-8 gap-4 relative">
							<input onChange={handleFileChange} ref={fileRef} type="file" className="hidden" multiple />
							<button type="button" onClick={onClickUpload} className="w-max text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
								<p>Upload Documents</p>
							</button>
							<button type="submit" disabled={uploading} className="w-max text-white bg-darkgreen2 text-uppercase 2xl:text-2xl xl:text-lg px-6 rounded-3xl">
								<p>{uploading ? "Requesting..." : "Request"}</p>
							</button>
							<p className="absolute sm:bottom-4 bottom-2 text-gray-500">Upload documents are optional</p>
						</div>
						<div className="flex flex-wrap gap-4">
							{files.length > 0 ? (
								files.map((file, index) => (
									<div key={index} className="bg-gray-100 p-2 rounded-md">
										<p className="text-sm">{file.name}</p>
									</div>
								))
							) : (
								<p className="text-gray-500">No files uploaded yet</p>
							)}
						</div>
						{uploadedUrls.length > 0 && (
							<div className="mt-4">
								<p className="text-green-700">Uploaded files:</p>
								<ul>
									{uploadedUrls.map((url, idx) => (
										<li key={idx}>
											<a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
												{url}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</form>
					<p>Terms of use</p>
					<p>
						Shogun Maitake Canada Co., Ltd respects the importance of your privacy and protecting your personal information. As such, we want you to understand how we will use the information you provided on this registration page to create a free
						sample account.
					</p>
					<p>
						By clicking “I Agree” below, you acknowledge that you give authority to access the above account to allow you to request treatment samples, order educational materials, receive product information, support offerings, product news, and/or
						take part in additional training from Shogun Maitake Canada Co., Ltd.{" "}
					</p>
					<p>
						To create a Shogun Maitake Canada Co. Ltd free sample account, you will need to provide your first name, last name, email address, residential address, and blood test reports done within 6 months. Once you create an account, you have the
						option to enter additional information on your Shogun Maitake Canada Co., Ltd account if you so choose. Any information provided to create a Shogun Maitake Canada Co. Ltd account will not be shared with any third parties and is solely used
						to track requests/orders and tailor your experience.
					</p>
					<p>The applications suspected of being fraudulent may be excluded at our discretion, and that we may contact applicants by phone for verification. Please also mention that the campaign will close once we have received 2,000 applications without prior notice.</p>
					<p>After one month, if you are interested in purchasing, you will receive a 20% discount on each order, provided you submit lab reports as evidence of remission.</p>

					<p>You must check the “I agree” box and click “Create account” before you can proceed. If you do not agree to the terms above, you may exit this page. You may return to this page at any time to create an account.</p>
					<div className="flex items-center mb-4 gap-6">
						<p className="!mb-0">I confirm that I am 18 years of age or older.</p>
						<input type="checkbox" name="ageConfirm" {...register("ageConfirm", { required: true })} />
						{errors.ageConfirm && <p className="text-red-500 text-xs">You must confirm you are 18 or older.</p>}
					</div>
					<div className="flex items-center mb-4 gap-6">
						<p className="!mb-0">I agree</p>
						<input type="checkbox" name="agree" {...register("agree", { required: true })} />
						{errors.agree && <p className="text-red-500 text-xs">You must agree to the terms.</p>}
					</div>
					<div className="flex items-center mt-4 gap-6">
						<p>I endorse myself as a Cancer patient for taking PROTHERA & EX Tablet, I’m responsible for supervising myself. </p>
						<input type="checkbox" name="endorse" {...register("endorse", { required: true })} />
						{errors.endorse && <p className="text-red-500 text-xs">You must endorse yourself.</p>}
					</div>
					<p>Ordering 1 1-month free trial</p>
					<h2 className="text-center text-4xl text-green pt-28 pb-12">PERSONAL INFORMATION PROTECTION PLEDGE</h2>
					<p>To</p>
					<p>CUSTOMERS </p>
					<p>SHOGUN MAITAKE CANADA CO.LTD. (Hereinafter referred to as “the Company”) pledges to manage and administer the personal health-related information entrusted during the free sample program as follows. </p>
					<p>1. PURPOSE OF USE</p>
					<p>The Company to verify the efficacy of SHOGUN BLACK MAITAKE PROTHERA under the consultation of a Naturopath and Healthcare Practitioner. </p>
					<p>2. CONFIDENTIALITY AND MANAGEMENT OF INFORMATION </p>
					<p>The Company sets the controls that protect confidential, sensitive, and personal information from damage, theft, or misuse. The Company agrees and follows the confidentiality agreement signed between the patient and the healthcare provider.</p>
					<p>
						YOSHINOBU ODAIRA <span className="block">OWNER/PRESIDENT </span>SHOGUN MAITAKE CANADA CO., LTD.{" "}
					</p>
					<p>Inquires:</p>
					<p>
						John Jacob <span className="block">Shogun Maitake Canada Co., Ltd.</span> 6188 Colonel Talbot Road.<span className="block"> London ON N6P 1J1 </span>TEL:519-652-5783 <span className="block">jjacob@shogunmaitake.com</span>
					</p>
				</div>
			</div>
			<Footer />
			<WhatsAppButton />
		</div>
	);
};

export default OrderNow;