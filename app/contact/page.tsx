"use client"

import { Mail, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl mt-24 pb-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Our Information
          </legend>
          <div className="grid gap-3">
            <Label>Phone</Label>
            <p className="text-sm">831-123-1234</p>
            <Label>Email</Label>
            <p className="text-sm">hello@giorgio.com</p>
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Your Information
          </legend>
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
          </div>
        </fieldset>
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Message Details
          </legend>
          <div className="grid gap-3">
            <Label htmlFor="subject">Subject</Label>
            <Select>
              <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="reservation">Reservation</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="complaint">Complaint</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Please enter your message here..."
              className="min-h-[9.5rem]"
            />
          </div>
        </fieldset>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  )
}
