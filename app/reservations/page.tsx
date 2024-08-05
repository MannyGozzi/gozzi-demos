"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DatePicker from "@/components/DatePicker"
import { OTP } from "@/components/OTP"

export default function ReservationsPage() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="mt-16 w-full h-full p-6 mx-auto max-w-2xl">
      <h3 className="text-3xl font-bold tracking-tight mb-6">Save your seat</h3>
      <fieldset className="grid gap-4 rounded-lg border p-4 w-full">
        <legend className="-ml-1 px-1 text-sm font-medium">
          Your Information
        </legend>
        <div className="grid gap-3">
          <Label htmlFor="date">Date</Label>
          <DatePicker />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="johndoe@example.com" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          <Button className="self-center mt-2">Send Code</Button>
        </div>
      </fieldset>
      <fieldset className="grid gap-6 rounded-lg border p-4 w-full max-w-2xl mt-2">
        <legend className="-ml-1 px-1 text-sm font-medium">Verification</legend>

        <div className="grid gap-3">
          <Label htmlFor="otp">One Time Code</Label>
          <div className="flex justify-center">
            <OTP />
          </div>
          <Button className="self-center mt-4">Reserve</Button>
        </div>
      </fieldset>
    </div>
  )
}
