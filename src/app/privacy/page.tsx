import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck } from "lucide-react";
// import { WaveBackground } from "@/components/ui/wave-background";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen relative pt-24 pb-20 overflow-hidden">
            {/* Background Elements - Reusing for consistency */}
            {/* <WaveBackground /> */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/20 via-background to-background dark:from-violet-900/20"></div>

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4 text-primary w-fit mx-auto">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-sm font-medium">Privacy First</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground text-lg">Last updated: December 24, 2024</p>
                </div>

                <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 md:p-10 shadow-xl">
                    <p className="mb-8 text-muted-foreground leading-relaxed">
                        Welcome to PodSumm.ai. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">1. Data We Collect</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Identity Data</strong>: includes first name, last name, username or similar identifier.</li>
                                    <li><strong>Contact Data</strong>: includes email address and telephone number.</li>
                                    <li><strong>Technical Data</strong>: includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                    <li><strong>Usage Data</strong>: includes information about how you use our website, products and services.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">2. How We Use Your Data</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal obligation.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold">3. Data Security</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold">4. Contact Us</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@podsumm.ai" className="text-primary hover:underline font-medium">privacy@podsumm.ai</a>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
