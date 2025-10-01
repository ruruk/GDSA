"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[70vh] p-0 z-[99999] flex flex-col">
        <DialogHeader className="p-6 pb-0 flex-shrink-0">
          <DialogTitle className="text-2xl font-bold text-golden">
            Privacy Policy
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6 pb-6 overflow-hidden">
          <div className="space-y-6 text-sm text-slate-600">
            <div>
              <p className="mb-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p>
                Golden Dynasty SA (Pty) Ltd ("we," "our," or "us") is committed
                to protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website goldendynasty.co.za.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                1. Information We Collect
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground">
                    Personal Information
                  </h4>
                  <p>When you use our contact form, we collect:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Subject of inquiry</li>
                    <li>Message content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    Automatically Collected Information
                  </h4>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>IP address (anonymized)</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send project consultations and technical information</li>
                <li>Process job applications and recruitment inquiries</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage through Google Analytics</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                3. Information Sharing and Disclosure
              </h3>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>Internal Use:</strong> Your contact information is
                  shared with relevant team members (gordon@goldendynasty.co.za,
                  melanie@goldendynasty.co.za) to respond to your inquiries
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share data with
                  trusted third parties who assist in website operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                4. Data Security
              </h3>
              <p>
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the internet is 100% secure. We use industry-standard encryption
                and security protocols.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                5. Google Analytics
              </h3>
              <p className="mb-3">
                Our website uses Google Analytics to analyze website traffic and
                usage patterns. Google Analytics may collect:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Anonymized IP addresses</li>
                <li>Page views and user interactions</li>
                <li>Device and browser information</li>
                <li>Geographic location (country/city level)</li>
              </ul>
              <p className="mt-3">
                You can opt out of Google Analytics by installing the Google
                Analytics Opt-out Browser Add-on.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h3>
              <p>
                Our website uses cookies to enhance your browsing experience and
                for analytics purposes. You can control cookie settings through
                your browser preferences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                7. Your Rights
              </h3>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                8. Data Retention
              </h3>
              <p>
                We retain your personal information only as long as necessary to
                fulfill the purposes outlined in this policy or as required by
                law. Contact form submissions are typically retained for 2 years
                unless you request deletion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                9. International Transfers
              </h3>
              <p>
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place for such transfers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                10. Children's Privacy
              </h3>
              <p>
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                11. Changes to This Policy
              </h3>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                12. Contact Information
              </h3>
              <p className="mb-3">
                If you have any questions about this Privacy Policy, please
                contact us:
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
