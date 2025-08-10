export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#438A28"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl text-gray-800 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been processed successfully.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="px-6 py-2 bg-forestGreen text-white rounded-lg hover:bg-green-600 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
}
