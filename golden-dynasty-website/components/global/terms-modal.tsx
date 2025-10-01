"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[70vh] p-0 z-[99999] flex flex-col">
        <DialogHeader className="p-6 pb-0 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-golden">
            Terms and Conditions
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6 pb-6 overflow-hidden">
          <div className="space-y-6 text-sm text-slate-600">
            <div>
              <p className="mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                Welcome to Golden Dynasty SA (Pty) Ltd. These Terms and
                Conditions ("Terms") govern your use of our website
                goldendynasty.co.za and our services. By accessing or using our
                website, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                1. Company Information
              </h3>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p>
                  <strong>Golden Dynasty SA (Pty) Ltd</strong>
                </p>
                <p>Registration Number: 2020/123456/07</p>
                <p>269 Fleming Rd, Meadowdale, Germiston, 1401</p>
                <p>Johannesburg, South Africa</p>
                <p>
                  <strong>Contact:</strong> gordon@goldendynasty.co.za
                </p>
                <p>
                  <strong>Phone:</strong> Tel. 079-377 7186 / 061-2895338
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                2. Services Offered
              </h3>
              <p className="mb-3">Golden Dynasty SA specializes in:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fibre optic installation (OPGW, ADSS)</li>
                <li>Powerline products supply</li>
                <li>Project management and consultancy</li>
                <li>Equipment rentals</li>
                <li>Quality assurance and testing</li>
                <li>Emergency repairs and maintenance</li>
                <li>Electrical engineering services</li>
                <li>Infrastructure development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                3. Website Use
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">Permitted Use</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Browse and view our services and projects</li>
                    <li>Contact us for inquiries and consultations</li>
                    <li>Download certificates and documentation</li>
                    <li>Apply for job opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Prohibited Use
                  </h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Unauthorized reproduction of content</li>
                    <li>Use for illegal or unauthorized purposes</li>
                    <li>Attempting to gain unauthorized access</li>
                    <li>Transmitting viruses or malicious code</li>
                    <li>Interfering with website functionality</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                4. Intellectual Property
              </h3>
              <p className="mb-3">
                All content on this website, including but not limited to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Text, graphics, logos, and images</li>
                <li>Software and code</li>
                <li>Certificates and documentation</li>
                <li>Project descriptions and case studies</li>
              </ul>
              <p className="mt-3">
                Are the property of Golden Dynasty SA (Pty) Ltd and are
                protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                5. Contact Form and Communications
              </h3>
              <div className="space-y-3">
                <p>When you submit information through our contact form:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>You provide accurate and complete information</li>
                  <li>You consent to us using your information to respond</li>
                  <li>We may contact you regarding your inquiry</li>
                  <li>
                    Your information is handled according to our Privacy Policy
                  </li>
                </ul>
                <p>
                  <strong>Response Time:</strong> We aim to respond to all
                  inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                6. Job Applications
              </h3>
              <p className="mb-3">
                For recruitment inquiries and job applications:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Submit applications to melanie@goldendynasty.co.za</li>
                <li>Include relevant qualifications and experience</li>
                <li>We may retain your information for future opportunities</li>
                <li>All applications are treated confidentially</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                7. Certifications and Compliance
              </h3>
              <div className="space-y-3">
                <p>Golden Dynasty SA maintains the following certifications:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    <strong>ISO 9001:2015</strong> - Quality Management System
                  </li>
                  <li>
                    <strong>CIDB Grade 7EP</strong> - Electrical Engineering
                    Works
                  </li>
                  <li>
                    <strong>B-BBEE Level 1</strong> - Broad-Based Black Economic
                    Empowerment
                  </li>
                </ul>
                <p>
                  All services are provided in compliance with South African
                  regulations and industry standards.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                8. Limitation of Liability
              </h3>
              <p className="mb-3">To the maximum extent permitted by law:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>We provide the website "as is" without warranties</li>
                <li>
                  We are not liable for any indirect or consequential damages
                </li>
                <li>
                  Our liability is limited to the amount paid for our services
                </li>
                <li>We do not guarantee uninterrupted or error-free service</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                9. Indemnification
              </h3>
              <p>
                You agree to indemnify and hold harmless Golden Dynasty SA from
                any claims, damages, or expenses arising from your use of the
                website or violation of these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                10. Governing Law
              </h3>
              <p>
                These Terms are governed by the laws of South Africa. Any
                disputes will be resolved in the courts of South Africa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                11. Business Hours
              </h3>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p>
                  <strong>Regular Hours:</strong>
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Monday-Friday: 8:00 AM - 5:00 PM</li>
                  <li>Saturday: 8:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
                <p className="mt-3">
                  <strong>Emergency Services:</strong> 24/7 availability for
                  critical infrastructure issues
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                12. Modifications
              </h3>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of the website constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                13. Severability
              </h3>
              <p>
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions will remain in full force and effect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                14. Contact Information
              </h3>
              <p className="mb-3">
                For questions about these Terms and Conditions, please contact:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p>
                  <strong>Golden Dynasty SA (Pty) Ltd</strong>
                </p>
                <p>269 Fleming Rd, Meadowdale, Germiston, 1401</p>
                <p>Johannesburg, South Africa</p>
                <p>
                  <strong>Email:</strong> gordon@goldendynasty.co.za
                </p>
                <p>
                  <strong>Phone:</strong> Tel. 079-377 7186 / 061-2895338
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
