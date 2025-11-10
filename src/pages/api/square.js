import { SquareClient, SquareEnvironment } from "square";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { sourceId, amount } = req.body;

    // convert to BigInt in cents
    const amountInCents = BigInt(Math.round(Number(amount) * 100));

    const square = new SquareClient({
      environment: SquareEnvironment.Sandbox,
      token: process.env.SQUARE_ACCESS_TOKEN,
    });

    const response = await square.payments.create({
      sourceId: sourceId,
      idempotencyKey: crypto.randomUUID(),
      amountMoney: {
        amount: amountInCents, // 👈 bigint
        currency: "CAD",
      },
    });

    const payment = response.payment;

    res.status(200).json({
      success: true,
      paymentId: payment.id,
      status: payment.status,
      message: "Payment validated successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
      details: error.errors,
    });
  }
}