import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="pt-32 pb-20 bg-bg-main min-h-screen text-text-main">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('nav_about')}</h1>
                        <div className="w-20 h-1 bg-brand-blue mb-8"></div>
                        <div className="space-y-6 text-text-alt leading-relaxed text-lg">
                            <p>
                                {t('about_p1')}
                            </p>
                            <p>
                                {t('about_p2')}
                            </p>
                            <p>
                                {t('about_p3')}
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-brand-blue/10 blur-3xl rounded-full"></div>
                        <img
                            src="/images/abdisa_about_hero.png"
                            alt="Abdisa Car Importer"
                            className="relative rounded-2xl shadow-2xl border border-border-main"
                        />
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { icon: Target, title: t('mission_title'), desc: t('mission_desc') },
                        { icon: Award, title: t('quality_title'), desc: t('quality_desc') },
                        { icon: Users, title: t('customer_title'), desc: t('customer_desc') }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                            }}
                            className="glass-premium p-10 rounded-3xl hover:border-brand-blue/40 transition-all hover:shadow-2xl hover:shadow-brand-blue/5 group"
                        >
                            <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:rotate-12 transition-all duration-500">
                                <item.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-text-alt leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
