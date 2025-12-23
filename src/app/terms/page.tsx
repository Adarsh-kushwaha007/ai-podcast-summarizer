import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText } from "lucide-react";
// import { WaveBackground } from "@/components/ui/wave-background";

export default function TermsPage() {
    return (
        <div className="min-h-screen relative pt-24 pb-20 overflow-hidden">
            {/* Background Elements */}
            {/* <WaveBackground /> */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/20 via-background to-background dark:from-indigo-900/20"></div>

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 text-primary w-fit mx-auto">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm font-medium">Terms of Use</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground text-lg">Last updated: December 24, 2024</p>
                </div>

                <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-10 shadow-xl">
                    <p className="mb-8 text-muted-foreground leading-relaxed">
                        These Terms of Service ("Terms") strictly govern your access to and use of the services provided by PodSumm.ai ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">1. Understanding the Terms</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service. These terms apply to all visitors, users and others who access or use the Service.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">2. Intellectual Property</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                The Service and its original content (excluding Content provided by you or other users), features and functionality are and will remain the exclusive property of PodSumm.ai and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold">3. User Accounts</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold">4. Termination</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-lg font-semibold">5. Limitation of Liability</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                In no event shall PodSumm.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-lg font-semibold">6. Contact Us</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                If you have any questions about these Terms, please contact us at: <a href="mailto:legal@podsumm.ai" className="text-primary hover:underline font-medium">legal@podsumm.ai</a>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
