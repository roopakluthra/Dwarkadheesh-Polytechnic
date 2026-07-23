import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";

import Container from "../shared/Container";
import Button from "../shared/Button";

const courses = [
    "O Level",
    "DCA",
    "CCA",
    "Digital Marketing",
];

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">
            {/* Decorative Background */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

            <Container className="relative flex min-h-screen items-center">
                <div className="grid w-full items-center gap-16 lg:grid-cols-2">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
                            <GraduationCap size={18} />
                            IT Skill Development Institute
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
                            Dwarkadheesh
                            <span className="block text-amber-400">
                                Polytechnic
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-blue-100">
                            Empowering students with practical computer education,
                            professional certifications, and career-oriented training
                            for today's digital world.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button>
                                Explore Courses
                            </Button>

                            <Button variant="secondary">
                                Apply Now
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-3">
                            {courses.map((course) => (
                                <span
                                    key={course}
                                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="hidden lg:flex justify-center"
                    >
                        <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                            <div className="text-center">
                                <GraduationCap
                                    size={90}
                                    className="mx-auto text-amber-400"
                                />

                                <h3 className="mt-6 text-3xl font-bold text-white">
                                    Institute Image
                                </h3>

                                <p className="mt-3 text-blue-100">
                                    We'll replace this with the official image later.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;