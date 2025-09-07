import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, QrCode } from "lucide-react"

export default function PaymentRequest() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto space-y-6">
        {/* Payment Request Card */}
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6 text-center space-y-6">
            {/* Header with Status */}
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h1 className="text-lg font-semibold text-gray-900 text-balance">Abrin C Saiju is Requesting Payment</h1>
              <p className="text-sm text-gray-600">
                UPI ID: <span className="font-mono">abrin1999-3@okicici</span>
              </p>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                <img src="/upi-payment-qr-code-with-black-squares-pattern.jpg" alt="Payment QR Code" className="w-44 h-44" />
              </div>
            </div>

            {/* Powered By */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Powered By</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                  <QrCode className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">CodeSlice</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg" size="lg">
            Pay
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-green-500 text-green-600 hover:bg-green-50 font-medium py-3 rounded-lg bg-transparent"
            size="lg"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        {/* Create New Request Link */}
        <div className="text-center">
          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">
            Click here to create a new payment request
          </a>
        </div>
      </div>
    </div>
  )
}
