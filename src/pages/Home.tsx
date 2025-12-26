import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Zap, ChevronRight, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const carVariants = {
    hidden: { x: '-120vw', opacity: 0, rotate: -3 },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            damping: 20,
            stiffness: 45,
            restDelta: 0.001,
            duration: 2.5
        }
    } as any
};

const smokeVariants: any = {
    animate: (i: number) => ({
        x: [-20, -100 - (i * 20)],
        y: [0, -20 - (Math.random() * 30)],
        scale: [1, 2.5 + (Math.random() * 2)],
        opacity: [0, 0.4, 0],
        transition: {
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
        }
    })
};

const sparkVariants: any = {
    animate: (i: number) => ({
        x: [0, (Math.random() - 0.5) * 100],
        y: [0, (Math.random() - 0.5) * 100],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        transition: {
            duration: 0.3,
            repeat: Infinity,
            delay: i * 0.5,
            repeatDelay: Math.random() * 2
        }
    })
};

const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.2, 0.5],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    } as any
};

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col w-full selection:bg-brand-blue selection:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-bg-main transition-colors duration-500">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/70 to-transparent transition-colors duration-500"></div>
                    <motion.div
                        variants={pulseVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute top-1/4 -right-1/4 w-full h-full bg-brand-blue/10 blur-[120px] rounded-full"
                    />
                </div>

                <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-10">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-brand-blue"></span>
                            <span className="text-brand-blue text-sm font-bold tracking-[0.3em] uppercase">{t('hero_tagline')}</span>
                        </div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-text-main"
                            >
                                {t('hero_title').split('–')[0]}
                                <span className="text-brand-blue block text-4xl md:text-6xl mt-4 opacity-100">
                                    {t('hero_title').split('–')[1]}
                                </span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-text-alt max-w-xl leading-relaxed font-light"
                        >
                            {t('hero_subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-6 pt-4"
                        >
                            <Link to="/cars" className="btn-primary group !px-10 !py-4 text-lg">
                                {t('btn_view_cars')}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-secondary !px-10 !py-4 text-lg">
                                {t('nav_contact')}
                            </Link>
                        </motion.div>

                        <div className="flex items-center gap-8 pt-6 border-t border-border-main mt-6">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-text-main">500+</span>
                                <span className="text-xs text-text-alt uppercase tracking-widest font-bold">{t('stat_imported')}</span>
                            </div>
                            <div className="h-8 w-px bg-border-main"></div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-text-main">100%</span>
                                <span className="text-xs text-text-alt uppercase tracking-widest font-bold">{t('stat_trusted')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Redesigned Insane Car Animation */}
                    <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        <motion.div
                            variants={carVariants}
                            initial="hidden"
                            animate="visible"
                            className="relative w-full max-w-3xl"
                        >
                            {/* Feature Detection: Logic to detect if car is Electric or Hybrid */}
                            {(() => {
                                const featuredCar = { specs: ["Diesel"] }; // Toggle this manually or connect to state
                                const isEV = featuredCar.specs.some(s => s.includes('Electric') || s.includes('e-POWER'));
                                const isICE = !isEV;

                                return (
                                    <>
                                        {/* FX: Smoke for ICE */}
                                        {isICE && (
                                            <div className="absolute left-0 bottom-1/4 w-full h-full pointer-events-none overflow-visible">
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={`smoke-${i}`}
                                                        custom={i}
                                                        variants={smokeVariants}
                                                        animate="animate"
                                                        className="absolute left-10 bottom-0 w-12 h-12 bg-text-main/10 blur-xl rounded-full"
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {/* FX: Electric Aura for EVs */}
                                        {isEV && (
                                            <div className="absolute inset-0 pointer-events-none">
                                                <motion.div
                                                    animate={{
                                                        boxShadow: [
                                                            "0 0 20px rgba(6, 182, 212, 0)",
                                                            "0 0 50px rgba(6, 182, 212, 0.3)",
                                                            "0 0 20px rgba(6, 182, 212, 0)"
                                                        ]
                                                    }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="absolute inset-0 rounded-3xl"
                                                />
                                                {[...Array(4)].map((_, i) => (
                                                    <motion.div
                                                        key={`spark-${i}`}
                                                        custom={i}
                                                        variants={sparkVariants}
                                                        animate="animate"
                                                        className="absolute left-1/2 top-1/2 w-1 h-8 bg-cyan-400 blur-[1px] rounded-full"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </>
                                );
                            })()}

                            <div className="absolute -inset-10 bg-brand-blue/20 blur-[100px] rounded-full opacity-50"></div>

                            {/* High-quality Car Image Placeholder - using a premium looking SUV image */}
                            <div className="relative z-20 drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                                <img
                                    src="/images/land-cruiser-300.png"
                                    alt="Land Cruiser 300"
                                    className="w-full aspect-[16/10] object-cover rounded-3xl border border-border-main shadow-2xl relative z-10"
                                />
                                <Link to="/cars" className="absolute bottom-8 left-8 p-5 bg-bg-main border-2 border-border-main/50 dark:border-white/10 backdrop-blur-xl rounded-[2rem] hidden md:block group/card hover:bg-brand-blue hover:border-brand-blue transition-all duration-500 cursor-pointer z-30 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center group-hover/card:bg-white/20 transition-colors duration-500">
                                            <Car size={28} className="text-brand-blue group-hover/card:text-white transition-colors duration-500" strokeWidth={2.5} />
                                        </div>
                                        <div className="pr-4">
                                            <p className="text-[10px] text-brand-blue font-black uppercase tracking-[0.2em] mb-1 group-hover/card:text-white/80 transition-colors">{t('model_year')} 2024</p>
                                            <p className="font-bold text-lg text-text-main group-hover/card:text-white transition-colors">Land Cruiser 300</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Dynamic Ground Shadow */}
                            <div className="absolute -bottom-12 left-1/2 -track-shadow w-[90%] h-12 bg-black/60 blur-[40px] rounded-[100%] z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brand Experience Section */}
            <section className="py-24 bg-bg-alt border-y border-border-main overflow-hidden transition-colors">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-between gap-12 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
                        {['Toyota', 'Nissan', 'Hyundai', 'Suzuki', 'Mercedes'].map((brand) => (
                            <div key={brand} className="text-4xl font-black tracking-tighter italic cursor-default text-text-main">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Features Section */}
            <section className="py-32 bg-bg-main relative transition-colors">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                                {t('diff_title_1')} <br /><span className="text-brand-blue">{t('diff_title_2')}</span>
                            </h2>
                            <div className="w-24 h-2 bg-brand-blue"></div>
                        </div>
                        <p className="text-text-alt max-w-md text-lg leading-relaxed">
                            {t('diff_subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: ShieldCheck,
                                title: t('feature_1_title'),
                                desc: t('feature_1_desc')
                            },
                            {
                                icon: Clock,
                                title: t('feature_2_title'),
                                desc: t('feature_2_desc')
                            },
                            {
                                icon: Zap,
                                title: t('feature_3_title'),
                                desc: t('feature_3_desc')
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-bg-alt/40 backdrop-blur-sm p-10 rounded-[40px] border border-border-main hover:border-brand-blue/40 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors"></div>
                                <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-text-alt leading-relaxed">{item.desc}</p>
                                <div className="mt-8 flex items-center gap-2 text-brand-blue font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t('btn_learn_more')} <ChevronRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-bg-alt border-2 border-border-main rounded-[50px] p-12 md:p-20 flex flex-col items-center text-center gap-10 relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-brand-blue opacity-5 group-hover:opacity-10 transition-opacity"></div>
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542362567-b055002b91f4?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-5 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000"></div>
                        <h2 className="text-4xl md:text-6xl font-black leading-none z-10 text-text-main uppercase tracking-tighter">
                            {t('cta_title_1')} <br /><span className="text-brand-blue">{t('cta_title_2')}</span>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 z-10 w-full md:w-auto">
                            <Link to="/cars" className="btn-primary !py-6 !px-12 text-xl shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:shadow-brand-blue/40">
                                {t('btn_all_inventory')}
                            </Link>
                            <Link to="/contact" className="btn-secondary !py-6 !px-12 text-xl backdrop-blur-md">
                                {t('btn_talk_expert')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
