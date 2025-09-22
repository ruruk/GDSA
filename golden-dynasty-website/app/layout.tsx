import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Golden Dynasty SA (Pty) Ltd - Engineering & Construction Excellence",
    template: "%s | Golden Dynasty SA",
  },
  description:
    "Leading South African engineering and construction company specializing in fibre optic installation, powerline products, project management, and social development initiatives. ISO 9001 certified with CIDB and B-BBEE accreditation.",
  generator: "Next.js",
  applicationName: "Golden Dynasty SA",
  referrer: "origin-when-cross-origin",
  keywords: [
    "engineering",
    "construction",
    "fibre optic installation",
    "powerline products",
    "project management",
    "social development",
    "South Africa",
    "Johannesburg",
    "Germiston",
    "electrical infrastructure",
    "power transmission",
    "distribution",
    "ISO 9001",
    "CIDB",
    "B-BBEE",
    "engineering consulting",
    "infrastructure development",
    "telecommunications",
    "electrical engineering",
    "civil engineering",
    "project delivery",
    "sustainable development",
    "community empowerment",
    "technical solutions",
    "infrastructure maintenance",
    "power systems",
    "network installation",
    "engineering services",
    "construction management",
    "quality assurance",
    "renewable energy",
    "smart grid",
    "fiber optic cables",
    "power line construction",
    "electrical contractors",
    "infrastructure projects",
    "engineering solutions",
    "construction services",
    "technical consulting",
    "project engineering",
  ],
  authors: [{ name: "Golden Dynasty SA (Pty) Ltd" }],
  creator: "Golden Dynasty SA (Pty) Ltd",
  publisher: "Golden Dynasty SA (Pty) Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goldendynasty.co.za"),
  alternates: {
    canonical: "/",
    languages: {
      "en-ZA": "https://goldendynasty.co.za",
      "en-US": "https://goldendynasty.co.za",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://goldendynasty.co.za",
    siteName: "Golden Dynasty SA",
    title:
      "Golden Dynasty SA (Pty) Ltd - Engineering & Construction Excellence",
    description:
      "Leading South African engineering and construction company specializing in fibre optic installation, powerline products, project management, and social development initiatives.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Golden Dynasty SA - Engineering & Construction Excellence",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goldendynastysa",
    creator: "@goldendynastysa",
    title:
      "Golden Dynasty SA (Pty) Ltd - Engineering & Construction Excellence",
    description:
      "Leading South African engineering and construction company specializing in fibre optic installation, powerline products, project management, and social development initiatives.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Engineering & Construction",
  classification: "Business",
  other: {
    "contact:phone_number": "+27 (0) 11 123 4567",
    "contact:email": "info@goldendynasty.co.za",
    "contact:country_name": "South Africa",
    "contact:region": "Gauteng",
    "contact:locality": "Johannesburg",
    "contact:street_address": "269 Fleming Rd, Meadowdale, Germiston, 1401",
    "geo.region": "ZA-GP",
    "geo.placename": "Germiston",
    "geo.position": "-26.151843;28.176094",
    ICBM: "-26.151843, 28.176094",
    "DC.title": "Golden Dynasty SA - Engineering Excellence",
    "DC.creator": "Golden Dynasty SA (Pty) Ltd",
    "DC.subject": "Engineering, Construction, Infrastructure",
    "DC.description":
      "Leading South African engineering and construction company",
    "DC.publisher": "Golden Dynasty SA (Pty) Ltd",
    "DC.contributor": "Golden Dynasty SA (Pty) Ltd",
    "DC.date": "2024-01-25",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://goldendynasty.co.za",
    "DC.source": "https://goldendynasty.co.za",
    "DC.language": "en-ZA",
    "DC.relation": "https://goldendynasty.co.za",
    "DC.coverage": "South Africa",
    "DC.rights": "Copyright Golden Dynasty SA (Pty) Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme and App Configuration */}
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="application-name" content="Golden Dynasty SA" />
        <meta name="apple-mobile-web-app-title" content="Golden Dynasty SA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Viewport and Performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />

        {/* Performance and Security */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="ZA-GP" />
        <meta name="geo.placename" content="Germiston" />
        <meta name="geo.position" content="-26.151843;28.176094" />
        <meta name="ICBM" content="-26.151843, 28.176094" />

        {/* Social Media and Branding */}
        <meta property="og:site_name" content="Golden Dynasty SA" />
        <meta property="og:locale" content="en_ZA" />
        <meta property="article:author" content="Golden Dynasty SA (Pty) Ltd" />
        <meta
          property="article:publisher"
          content="Golden Dynasty SA (Pty) Ltd"
        />
        <meta name="twitter:domain" content="goldendynasty.co.za" />
        <meta name="twitter:url" content="https://goldendynasty.co.za" />

        {/* Business Information */}
        <meta
          name="business:contact_data:street_address"
          content="269 Fleming Rd, Meadowdale"
        />
        <meta name="business:contact_data:locality" content="Germiston" />
        <meta name="business:contact_data:region" content="Gauteng" />
        <meta name="business:contact_data:postal_code" content="1401" />
        <meta
          name="business:contact_data:country_name"
          content="South Africa"
        />
        <meta
          name="business:contact_data:phone_number"
          content="+27 (0) 11 123 4567"
        />
        <meta
          name="business:contact_data:email"
          content="info@goldendynasty.co.za"
        />

        {/* Performance Hints */}
        <link rel="preload" href="/og-image.png" as="image" />
        <link rel="preload" href="/images/golden-dynasty-logo.png" as="image" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Golden Dynasty SA (Pty) Ltd",
              alternateName: "Golden Dynasty SA",
              url: "https://goldendynasty.co.za",
              logo: {
                "@type": "ImageObject",
                url: "https://goldendynasty.co.za/images/golden-dynasty-logo.png",
                width: 300,
                height: 100,
              },
              image: "https://goldendynasty.co.za/og-image.png",
              description:
                "Leading South African engineering and construction company specializing in fibre optic installation, powerline products, project management, and social development initiatives.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "269 Fleming Rd, Meadowdale",
                addressLocality: "Germiston",
                addressRegion: "Gauteng",
                postalCode: "1401",
                addressCountry: "ZA",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+27-11-123-4567",
                  contactType: "customer service",
                  email: "info@goldendynasty.co.za",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+27-11-123-4567",
                  contactType: "sales",
                  email: "sales@goldendynasty.co.za",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+27-11-123-4567",
                  contactType: "technical support",
                  email: "support@goldendynasty.co.za",
                  availableLanguage: "English",
                },
              ],
              sameAs: [
                "https://www.linkedin.com/company/golden-dynasty-sa",
                "https://twitter.com/goldendynastysa",
                "https://www.facebook.com/goldendynastysa",
                "https://www.instagram.com/goldendynastysa",
              ],
              foundingDate: "2020",
              numberOfEmployees: "50-100",
              industry: "Engineering and Construction",
              legalName: "Golden Dynasty SA (Pty) Ltd",
              taxID: "2020/123456/07",
              duns: "123456789",
              certifications: [
                "ISO 9001:2015",
                "CIDB Contractor Certificate",
                "B-BBEE Level 1",
              ],
              areaServed: [
                {
                  "@type": "Country",
                  name: "South Africa",
                },
                {
                  "@type": "State",
                  name: "Gauteng",
                },
                {
                  "@type": "City",
                  name: "Johannesburg",
                },
                {
                  "@type": "City",
                  name: "Germiston",
                },
              ],
              serviceType: [
                "Fibre Optic Installation",
                "Powerline Products",
                "Project Management",
                "Social Development",
                "Engineering Consulting",
                "Electrical Infrastructure",
                "Power Transmission",
                "Distribution Systems",
                "Telecommunications",
                "Civil Engineering",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Engineering Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fibre Optic Installation",
                      description:
                        "Professional fibre optic cable installation and maintenance services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Powerline Products",
                      description:
                        "High-quality powerline products and electrical components",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Project Management",
                      description:
                        "Comprehensive project management for infrastructure projects",
                    },
                  },
                ],
              },
              knowsAbout: [
                "Electrical Engineering",
                "Civil Engineering",
                "Project Management",
                "Infrastructure Development",
                "Power Systems",
                "Telecommunications",
                "Quality Assurance",
                "Safety Management",
              ],
              slogan: "Engineering Excellence, Building Tomorrow",
              mission:
                "To deliver world-class engineering and construction solutions that power South Africa's infrastructure development",
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://goldendynasty.co.za/#organization",
              name: "Golden Dynasty SA (Pty) Ltd",
              image: "https://goldendynasty.co.za/og-image.png",
              telephone: "+27-11-123-4567",
              email: "info@goldendynasty.co.za",
              address: {
                "@type": "PostalAddress",
                streetAddress: "269 Fleming Rd, Meadowdale",
                addressLocality: "Germiston",
                addressRegion: "Gauteng",
                postalCode: "1401",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.151843,
                longitude: 28.176094,
              },
              url: "https://goldendynasty.co.za",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              currenciesAccepted: "ZAR",
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Golden Dynasty SA",
              url: "https://goldendynasty.co.za",
              description:
                "Leading South African engineering and construction company",
              publisher: {
                "@type": "Organization",
                name: "Golden Dynasty SA (Pty) Ltd",
              },
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://goldendynasty.co.za/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en-ZA",
            }),
          }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
