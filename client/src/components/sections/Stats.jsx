import { motion } from "framer-motion";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import { stats } from "../../data/stats";

const Stats = () => {
    return (
        <section className="bg-slate-50 py-24">
            <Container>
                <SectionTitle
                    title="Our Impact"
                    subtitle="Helping students build successful careers through quality computer education."
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.15,
                                }}
                                viewport={{ once: true }}
                                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                    <Icon className="text-blue-800" size={32} />
                                </div>

                                <h3 className="mt-6 text-4xl font-bold text-slate-800">
                                    {item.value}
                                </h3>

                                <p className="mt-3 text-slate-500">
                                    {item.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default Stats;