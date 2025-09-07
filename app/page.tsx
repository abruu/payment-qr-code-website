"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function PaymentRequest() {
  const payeeName = process.env.NEXT_PUBLIC_PAYEE_NAME || "Abrin C Saiju"
  const upiId = process.env.NEXT_PUBLIC_UPI_ID || "abrin1999-3@okicici"
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 9876543210"
  const qrCodeImage = process.env.NEXT_PUBLIC_QR_CODE_IMAGE || "/upi-payment-qr-code-with-black-squares-pattern.jpg"
  const paymentLink =
    process.env.NEXT_PUBLIC_PAYMENT_LINK || `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}`

  const [copiedUpi, setCopiedUpi] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handlePayment = () => {
    window.open(paymentLink, "_blank")
  }

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId)
      setCopiedUpi(true)
      setTimeout(() => setCopiedUpi(false), 2000)
    } catch (err) {
      console.error("Failed to copy UPI ID:", err)
    }
  }

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    } catch (err) {
      console.error("Failed to copy phone number:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xs mx-auto">
        {/* Payment Request Card */}
        <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-2 text-center space-y-8">
            {/* Header with Status */}
            <div className="space-y-3">
              <h1 className="text-xl font-bold text-gray-900 text-balance leading-tight">
                {payeeName} is Requesting Payment
              </h1>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">UPI ID</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-base font-semibold text-gray-900 break-all flex-1">{upiId}</p>
                  <Button
                    onClick={copyUpiId}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-200 flex-shrink-0"
                  >
                    {copiedUpi ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-600" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-base font-semibold text-gray-900 flex-1">{phoneNumber}</p>
                  <Button
                    onClick={copyPhoneNumber}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-200 flex-shrink-0"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-600" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex justify-center">
              <div className="w-56 h-56 bg-white border border-gray-100 rounded-2xl p-4 shadow-inner">
                <img
                  src={qrCodeImage || "/placeholder.svg"}
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Pay Button */}
            <div className="flex justify-center ">
  <a 
    href={paymentLink}
    className="inline-block rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out"
  >
    💳 Pay Now
  </a>
</div>


            <small>V 1.1</small>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
