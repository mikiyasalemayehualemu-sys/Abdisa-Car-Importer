import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cars } from '../data/cars';
import { MessageCircle, ExternalLink } from 'lucide-react';

export default function AvailableCars() {
    const { t } = useTranslation();
    const whatsappNumber = "251974744444";

    return (
        <div className="pt-32 pb-20 bg-bg-main min-h-screen text-text-main">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav_cars')}</h1>
                    <div className="w-20 h-1 bg-brand-blue"></div>
                    <p className="mt-6 text-text-alt max-w-2xl">
                        {t('cars_desc')}
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {cars.map((car) => (
                        <motion.div
                            key={car.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } }
                            }}
                            className="bg-bg-alt rounded-2xl overflow-hidden border border-border-main hover:border-brand-blue/30 transition-all group hover:shadow-2xl hover:shadow-brand-blue/5"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={`${car.make} ${car.model}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white text-sm font-bold flex items-center gap-2">
                                        {t('btn_view_details')} <ExternalLink className="w-4 h-4" />
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 bg-brand-blue backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-black tracking-widest uppercase">
                                    {car.year}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-main group-hover:text-brand-blue transition-colors">{car.make} {car.model}</h3>
                                        <p className="text-brand-blue font-black mt-1 text-sm">{car.price === "Inquire for Price" ? t('price_inquire') : car.price}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 justify-end max-w-[120px]">
                                        {car.specs.map((spec, i) => (
                                            <span key={i} className="text-[9px] bg-bg-main px-2 py-0.5 rounded border border-border-main text-text-alt uppercase font-bold">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in the ${car.year} ${car.make} ${car.model} I saw on your website.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow btn-whatsapp py-3 !rounded-xl text-sm"
                                    >
                                        <MessageCircle className="w-4 h-4" /> {t('btn_whatsapp')}
                                    </a>
                                    <button className="p-3 bg-bg-main border border-border-main rounded-xl hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all text-text-main group-hover:shadow-lg">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
