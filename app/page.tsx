import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PaymentRequest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xs mx-auto">
        {/* Payment Request Card */}
        <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-8 text-center space-y-8">
            {/* Header with Status */}
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-xl font-bold text-gray-900 text-balance leading-tight">
                Abrin C Saiju is Requesting Payment
              </h1>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">UPI ID</p>
                <p className="font-mono text-base font-semibold text-gray-900 break-all">abrin1999-3@okicici</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-56 h-56 bg-white border border-gray-100 rounded-2xl p-4 shadow-inner">
                <img
                  src="/upi-payment-qr-code-with-black-squares-pattern.jpg"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Pay Button */}
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              size="lg"
            >
              Pay Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
