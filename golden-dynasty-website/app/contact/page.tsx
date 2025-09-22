"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
import PageHeader from "@/components/global/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create mailto link
    const mailtoLink = `mailto:melanie@goldendynasty.co.za?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          description="Get in touch with our engineering team to discuss your infrastructure projects and discover how we can partner for success."
          backgroundImage="/placeholder.svg?height=400&width=1200"
        />

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Company Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Ready to discuss your electrical infrastructure project? Our
                    experienced team is here to provide expert consultation and
                    tailored solutions for your power transmission and
                    distribution needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <Card className="border-golden/20 hover:border-golden/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-golden/10 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-golden" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Head Office
                          </h3>
                          <p className="text-muted-foreground">
                            Johannesburg, South Africa
                            <br />
                            Gauteng Province
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-golden/20 hover:border-golden/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-golden/10 p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-golden" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Phone
                          </h3>
                          <p className="text-muted-foreground">
                            <a
                              href="tel:+27111234567"
                              className="hover:text-golden transition-colors"
                            >
                              +27 (0) 11 123 4567
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-golden/20 hover:border-golden/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-golden/10 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-golden" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Email
                          </h3>
                          <div className="space-y-1">
                            <p className="text-muted-foreground">
                              General:{" "}
                              <a
                                href="mailto:info@goldendynasty.co.za"
                                className="hover:text-golden transition-colors"
                              >
                                info@goldendynasty.co.za
                              </a>
                            </p>
                            <p className="text-muted-foreground">
                              HR:{" "}
                              <a
                                href="mailto:melanie@goldendynasty.co.za"
                                className="hover:text-golden transition-colors"
                              >
                                melanie@goldendynasty.co.za
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Business Hours */}
                  <Card className="border-golden/20 hover:border-golden/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-golden/10 p-3 rounded-lg">
                          <Clock className="w-6 h-6 text-golden" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            Business Hours
                          </h3>
                          <div className="space-y-1 text-muted-foreground">
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday: 8:00 AM - 1:00 PM</p>
                            <p>Sunday: Closed</p>
                            <p className="text-sm text-golden mt-2">
                              Emergency services available 24/7
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column - Inquiry Form */}
              <div>
                <Card className="border-golden/20 sticky top-[150px]">
                  <CardContent className="p-8 py-1.5">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="border-golden/20 focus:border-golden"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="border-golden/20 focus:border-golden"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Subject *
                        </label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            handleInputChange("subject", value)
                          }
                        >
                          <SelectTrigger className="border-golden/20 focus:border-golden">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="project-consultation">
                              Project Consultation
                            </SelectItem>
                            <SelectItem value="product-inquiry">
                              Product Inquiry
                            </SelectItem>
                            <SelectItem value="technical-support">
                              Technical Support
                            </SelectItem>
                            <SelectItem value="partnership">
                              Partnership Opportunity
                            </SelectItem>
                            <SelectItem value="career">
                              Career Inquiry
                            </SelectItem>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            handleInputChange("message", e.target.value)
                          }
                          className="border-golden/20 focus:border-golden resize-none"
                          placeholder="Please provide details about your project requirements, timeline, and any specific questions you may have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                        }
                        className="w-full bg-golden hover:bg-golden-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        We typically respond within 24 hours during business
                        days.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Integration */}
        <section className="w-full">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.377176457245!2d28.17609355!3d-26.151843049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9513c6d65454bf%3A0xd1eacfde06d2d887!2s269%20Fleming%20Rd%2C%20Meadowdale%2C%20Germiston%2C%201401!5e0!3m2!1sen!2sza!4v1758577594893!5m2!1sen!2sza"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
