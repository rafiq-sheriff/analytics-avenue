'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'

import { PRIMARY } from '@/components/card/challenge-card/chalenge-card'

const fontHeading = 'font-[family-name:var(--font-heading)]'
const fontBody = 'font-[family-name:var(--font-body)]'

/* ── Lucide icons (already in project) ── */
import {
    BarChart3, TrendingUp, Target, ShieldCheck, DollarSign,
    Users, MessageSquareText, Star, AlertTriangle,
    Sparkles, Bot, LayoutDashboard, Briefcase, Activity, BookOpen, Repeat, FileCheck
} from 'lucide-react'

/* ── React Icons for Data Source logos ── */
import {
    SiShopify, SiSalesforce, SiPinterest, SiInstagram, SiYoutube, SiTiktok, SiGoogleads, SiFacebook,
    SiIntuit, SiGooglecloud, SiDatabricks, SiSnowflake, SiApacheairflow,
} from 'react-icons/si'
import { FaFileExcel, FaFileCsv, FaGoogleDrive, FaTwitter, FaMagento, FaAws, FaMicrosoft, FaDatabase } from 'react-icons/fa'

type DrawLineProps = {
    d: string
    delay?: number
    isSolid?: boolean
    color?: string
    strokeWidth?: number
}

type PulseDotProps = { cx: number; cy: number; delay?: number; color?: string }

type FadeInProps = { children: ReactNode; delay?: number; y?: number; className?: string }

type SectionHeaderProps = {
    number?: string
    title: ReactNode
    subtitle: ReactNode
    center?: boolean
}

type LogoCardProps = { name: string; Icon: IconType; color?: string; delay?: number }

type DataTypeTagProps = { label: string; delay?: number }

type ToolBadgeProps = {
    Icon: IconType
    name: string
    iconColor?: string
    delay?: number
    className?: string
}

type AISolutionCardProps = {
    icon: LucideIcon
    title: string
    description: string
    delay?: number
}

type SolutionItemProps = { icon: LucideIcon; label: string; delay?: number; color: string }

type SectionConnectorProps = { delay?: number; color?: string }


/* ═══════════════════════════════════════════════════
   ANIMATED DRAW LINE
   ═══════════════════════════════════════════════════ */
const DrawLine = ({ d, delay = 0, isSolid = false, color = PRIMARY, strokeWidth = 3 }: DrawLineProps) => (
    <>
        <motion.path
            d={d} fill="none" stroke={color} strokeWidth={strokeWidth + 5}
            strokeLinecap="round" className="opacity-15 blur-md"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: isSolid ? 0.8 : 2.8, ease: "easeInOut", delay }}
        />
        <motion.path
            d={d} fill="none" stroke={color} strokeWidth={strokeWidth}
            strokeDasharray={isSolid ? "none" : "10 10"} strokeLinecap="round"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                    pathLength: 1, opacity: 1,
                    transition: {
                        pathLength: { duration: isSolid ? 0.8 : 2.8, ease: "easeInOut", delay },
                        opacity: { duration: 0.1, delay }
                    }
                }
            }}
        />
    </>
)

/* ═══════════════════════════════════════════════════
   PULSING DOT
   ═══════════════════════════════════════════════════ */
const PulseDot = ({ cx, cy, delay = 0, color = PRIMARY }: PulseDotProps) => (
    <>
        <motion.circle cx={cx} cy={cy} r="5" fill={color}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring", stiffness: 200 }}
        />
        <motion.circle cx={cx} cy={cy} r="12" fill="none" stroke={color} strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />
    </>
)

/* ═══════════════════════════════════════════════════
   FADE-IN WRAPPER
   ═══════════════════════════════════════════════════ */
const FadeIn = ({ children, delay = 0, y = 30, className = "" }: FadeInProps) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
)

/* ═══════════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════════ */
const SectionHeader = ({ number, title, subtitle, center = false }: SectionHeaderProps) => (
    <div className={`mb-10 lg:mb-14 ${center ? 'text-center' : ''}`}>
        {number != null && number !== '' && (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`${fontHeading} mb-5 block text-4xl font-extrabold text-[var(--aa-primary)] md:mb-6 md:text-5xl`}
        >{number}</motion.span>
        )}
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${fontHeading} text-2xl font-extrabold leading-snug tracking-[-0.02em] text-[var(--aa-text-strong)] md:text-3xl lg:text-4xl`}
        >{title}</motion.h3>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`${fontBody} mt-3 text-base leading-relaxed text-[var(--aa-text-muted)] ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >{subtitle}</motion.p>
    </div>
)

/* ═══════════════════════════════════════════════════
   LOGO CARD (with react-icons)
   ═══════════════════════════════════════════════════ */
const LogoCard = ({ name, Icon, color = "#333", delay = 0 }: LogoCardProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className={`${fontBody} flex items-center justify-center gap-2.5 rounded-[var(--aa-radius-xl)] border border-[var(--aa-border)] bg-[var(--aa-surface)] px-4 py-5 shadow-[var(--aa-shadow-sm)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--aa-shadow-md)]`}
    >
        <Icon size={24} color={color} />
        <span className="text-[13px] font-bold text-slate-700 whitespace-nowrap">{name}</span>
    </motion.div>
)

/* ═══════════════════════════════════════════════════
   DATA TYPE TAG
   ═══════════════════════════════════════════════════ */
const DataTypeTag = ({ label, delay = 0 }: DataTypeTagProps) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`${fontBody} flex min-h-[3rem] w-full items-center justify-center rounded-[var(--aa-radius-lg)] border-2 border-[var(--aa-border)] bg-[var(--aa-surface)] px-2 py-2 text-center text-sm font-bold leading-snug text-[var(--aa-text-strong)] shadow-[var(--aa-shadow-sm)] transition-colors hover:bg-[var(--aa-surface-soft)]`}
   >{label}</motion.div>
)

/* ═══════════════════════════════════════════════════
   TOOL BADGE (with react-icons)
   ═══════════════════════════════════════════════════ */
const ToolBadge = ({ Icon, name, iconColor = "#333", delay = 0, className = "" }: ToolBadgeProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay, type: "spring" }}
        className={`${fontBody} flex items-center gap-2 rounded-[var(--aa-radius-lg)] border border-[var(--aa-border)] bg-[var(--aa-surface)] px-4 py-2.5 shadow-[var(--aa-shadow-sm)] transition-all hover:shadow-[var(--aa-shadow-md)] ${className}`}
    >
        <Icon size={22} color={iconColor} />
        <span className="text-[13px] font-bold text-slate-700">{name}</span>
    </motion.div>
)

/* ═══════════════════════════════════════════════════
   AI SOLUTION CARD
   ═══════════════════════════════════════════════════ */
const AISolutionCard = ({ icon: LucideIcon, title, description, delay = 0 }: AISolutionCardProps) => (
    <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] border-l-4 border-l-[var(--aa-primary)] bg-[var(--aa-surface)] p-5 shadow-[var(--aa-shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--aa-shadow-md)]"
    >
        <div className="mb-2 flex items-center gap-2">
            <LucideIcon className="h-5 w-5 shrink-0 text-[var(--aa-primary)]" strokeWidth={2} />
            <h5 className={`${fontHeading} text-sm font-bold uppercase tracking-wide text-[var(--aa-primary)]`}>{title}</h5>
        </div>
        <p className={`${fontBody} text-sm leading-relaxed text-[var(--aa-text-strong)]`}>{description}</p>
    </motion.div>
)

/* ═══════════════════════════════════════════════════
   SOLUTION LIST ITEM
   ═══════════════════════════════════════════════════ */
const SolutionItem = ({ icon: LucideIcon, label, delay = 0, color }: SolutionItemProps) => (
    <FadeIn delay={delay} className="w-full">
        <div className="group flex cursor-default items-center gap-3 rounded-[var(--aa-radius-lg)] border border-transparent px-3 py-1.5 transition-colors hover:border-[var(--aa-border)] hover:bg-[var(--aa-surface-soft)]">
            <LucideIcon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" style={{ color }} strokeWidth={2.5} />
            <span className={`${fontBody} text-[13px] font-semibold leading-tight text-[var(--aa-text-strong)]`}>{label}</span>
        </div>
    </FadeIn>
)
const SectionConnector = ({ delay = 0, color = PRIMARY }: SectionConnectorProps) => (
    <div className="relative w-full flex justify-center" style={{ height: 130 }}>
        <svg className="w-[300px] h-full overflow-visible" viewBox="0 0 300 130">
            {/* Main vertical line */}
            <DrawLine d="M 150 0 L 150 130" delay={delay} color={color} isSolid={false} strokeWidth={3} />
            <PulseDot cx={150} cy={65} delay={delay + 0.6} color={color} />
            <motion.polygon
                points="142,120 150,135 158,120" fill={color}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: delay + 1.0, duration: 0.3 }}
            />
            {/* Arrow going right to Report Layer */}
            <DrawLine d="M 150 65 L 210 65" delay={delay + 0.8} color={PRIMARY} isSolid strokeWidth={2.5} />
            <motion.polygon
                points="205,60 213,65 205,70" fill={PRIMARY}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: delay + 1.4, duration: 0.3 }}
            />
        </svg>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
            <div className="absolute" style={{ top: '65px', left: 'calc(50% + 70px)', transform: 'translateY(-50%)' }}>
                <FadeIn delay={delay + 1.2} className="pointer-events-auto">
                    <div className={`${fontBody} whitespace-nowrap rounded-[var(--aa-radius-lg)] border-2 border-[var(--aa-primary)] bg-[var(--aa-surface)] px-4 py-1.5 text-[13px] font-bold text-[var(--aa-primary)] shadow-[var(--aa-shadow-sm)]`}>Reporting layer</div>
                </FadeIn>
            </div>
        </div>
    </div>
)


/* ═══════════════════════════════════════════════════════════════
   ██  MAIN WORKFLOW COMPONENT  ██
   ═══════════════════════════════════════════════════════════════ */
const Architecture = () => {

    /* ── Section 01 data ── */
    const dataSources = [
        { name: "QuickBooks", Icon: SiIntuit, color: "#365ABF" },
        { name: "Shopify", Icon: SiShopify, color: "#96BF48" },
        { name: "BigCommerce", Icon: FaFileExcel, color: "#34313F" },
        { name: "Magento", Icon: FaMagento, color: "#EE672F" },
        { name: "Salesforce", Icon: SiSalesforce, color: "#00A1E0" },
        { name: "Google Drive", Icon: FaGoogleDrive, color: "#4285F4" },
        { name: "CSV", Icon: FaFileCsv, color: "#217346" },
        { name: "Excel", Icon: FaFileExcel, color: "#217346" },
        { name: "Facebook", Icon: SiFacebook, color: "#1877F2" },
        { name: "Pinterest", Icon: SiPinterest, color: "#E60023" },
        { name: "Twitter / X", Icon: FaTwitter, color: "#1DA1F2" },
        { name: "Instagram", Icon: SiInstagram, color: "#E4405F" },
        { name: "YouTube", Icon: SiYoutube, color: "#FF0000" },
        { name: "TikTok", Icon: SiTiktok, color: "#000000" },
        { name: "Google Ads", Icon: SiGoogleads, color: "#4285F4" },
    ]

    const dataTypes = ["Semi-Structured", "Unstructured", "Structured", "Real-Time", "Batch"]

    /* ── Section 03 data ── */
    const aiSolutions1 = [
        { icon: Briefcase, label: "Marketing Performance & Optimization", color: PRIMARY },
        { icon: TrendingUp, label: "Inventory Demand Forecasting", color: PRIMARY },
        { icon: ShieldCheck, label: "Vendor Performance & Risk Monitor", color: PRIMARY },
        { icon: BarChart3, label: "Asset And Financial Audits", color: PRIMARY },
        { icon: Activity, label: "End-To-End Supply Chain Visibility", color: PRIMARY },
        { icon: AlertTriangle, label: "Quality Control & Defect Intelligence", color: PRIMARY },
    ]
    const aiSolutions2 = [
        { icon: DollarSign, label: "Price Optimization", color: PRIMARY },
        { icon: Users, label: "Customer Segmentation", color: PRIMARY },
        { icon: MessageSquareText, label: "Review & Sentiment Analysis", color: PRIMARY },
        { icon: AlertTriangle, label: "Churn & Risk Analytics", color: PRIMARY },
        { icon: Star, label: "Recommendation System", color: PRIMARY },
        { icon: TrendingUp, label: "Demand Forecasting", color: PRIMARY },
        { icon: Target, label: "Anomaly Detection", color: PRIMARY },
    ]
    const aiSolutions3 = [
        { icon: Sparkles, label: "AI Personalization & Recommendation Agents", color: PRIMARY },
        { icon: Bot, label: "Smart Production Scheduling & Autonomous Agents", color: PRIMARY },
        { icon: BookOpen, label: "Customer Negotiation & Contract Optimization Agents", color: PRIMARY },
        { icon: Repeat, label: "End-To-End Business Automation Agents", color: PRIMARY },
        { icon: FileCheck, label: "Clinical Documentation & Coding Agent", color: PRIMARY },
        { icon: ShieldCheck, label: "DataShield AI & Privacy Protection Agents", color: PRIMARY },
    ]

    /* ── Section 02 warehouse tools ── */
    const warehouseTools = [
        { Icon: SiDatabricks, name: "Databricks", iconColor: "#FF3621" },
        { Icon: SiSnowflake, name: "Snowflake", iconColor: "#29B5E8" },
        { Icon: FaAws, name: "AWS Glue", iconColor: "#FF9900" },
        { Icon: FaDatabase, name: "ETL", iconColor: "#6B7280" },
        { Icon: SiApacheairflow, name: "Airflow", iconColor: "#017CEE" },
        { Icon: FaMicrosoft, name: "Azure Data Factory", iconColor: "#0078D4" },
    ]

    return (
        <section
            id="architecture"
            aria-labelledby="architecture-heading"
            className="aa-section overflow-hidden bg-[var(--aa-surface-soft)]"
        >
            <div className="aa-container">

                {/* ────────────── Main Heading (pill highlight like About) ────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center sm:mb-20 lg:mb-28"
                >
                    <h2
                        id="architecture-heading"
                        className={`${fontHeading} text-balance text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[var(--aa-text-strong)] sm:text-4xl lg:text-[2.65rem]`}
                    >
                        Our End to End{" "}
                        <span
                            className="rounded-sm px-2 py-0.5 text-white"
                            style={{ backgroundColor: "var(--aa-primary)" }}
                        >
                            Data Analytics Solutions
                        </span>
                    </h2>
                </motion.div>


                {/* ═══════════════════════════════════════════
            SECTION 01 — DATA SOURCES (VERTICAL)
            ═══════════════════════════════════════════ */}
                <div className="mb-0">
                    <SectionHeader
                        number="01"
                        title="Data Sources"
                        subtitle="Capturing multi-channel data across E-commerce, Social, and CRM platforms."
                        center
                    />

                    {/* Logo Grid */}
                    <div className="max-w-4xl mx-auto mb-10">
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                            {dataSources.map((src, i) => (
                                <LogoCard key={src.name} name={src.name} Icon={src.Icon} color={src.color} delay={i * 0.04} />
                            ))}
                        </div>
                    </div>

                    {/* Data Type Tags + animated orange lines flowing down from grid */}
                    <div className="relative max-w-4xl mx-auto flex flex-col items-center">
                        <svg className="w-full h-16 pointer-events-none hidden lg:block overflow-visible" viewBox="0 0 800 64" preserveAspectRatio="none">
                            <DrawLine d="M 400 0 C 400 40, 150 20, 150 64" delay={0.2} color={PRIMARY} strokeWidth={2} />
                            <DrawLine d="M 400 0 C 400 40, 300 20, 300 64" delay={0.4} color={PRIMARY} strokeWidth={2} />
                            <DrawLine d="M 400 0 L 400 64" delay={0.6} color={PRIMARY} strokeWidth={2.5} isSolid />
                            <DrawLine d="M 400 0 C 400 40, 500 20, 500 64" delay={0.8} color={PRIMARY} strokeWidth={2} />
                            <DrawLine d="M 400 0 C 400 40, 650 20, 650 64" delay={1.0} color={PRIMARY} strokeWidth={2} />
                        </svg>

                        <div className="relative z-10 grid w-full grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-5 lg:-mt-1">
                            {dataTypes.map((dt, i) => (
                                <DataTypeTag key={dt} label={dt} delay={0.3 + i * 0.12} />
                            ))}
                        </div>

                        <div className="relative w-full h-[120px]">
                            <svg className="w-full h-full pointer-events-none hidden lg:block overflow-visible" viewBox="0 0 800 120" preserveAspectRatio="none">
                                {/* Inward fanning curves */}
                                <DrawLine d="M 150 0 C 150 40, 400 30, 400 60" delay={1.2} color={PRIMARY} strokeWidth={2} />
                                <DrawLine d="M 300 0 C 300 40, 400 30, 400 60" delay={1.4} color={PRIMARY} strokeWidth={2} />
                                <DrawLine d="M 400 0 L 400 60" delay={1.6} color={PRIMARY} strokeWidth={2.5} isSolid />
                                <DrawLine d="M 500 0 C 500 40, 400 30, 400 60" delay={1.8} color={PRIMARY} strokeWidth={2} />
                                <DrawLine d="M 650 0 C 650 40, 400 30, 400 60" delay={2.0} color={PRIMARY} strokeWidth={2} />

                                {/* Central node dot */}
                                <PulseDot cx={400} cy={60} delay={2.2} color={PRIMARY} />

                                {/* Line going straight down */}
                                <DrawLine d="M 400 60 L 400 130" delay={2.4} color={PRIMARY} strokeWidth={2.5} isSolid />
                                <motion.polygon points="394,124 400,132 406,124" fill={PRIMARY}
                                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }} transition={{ delay: 3.0 }}
                                />
                            </svg>



                            {/* Mobile version */}
                            <FadeIn delay={1.5} className="relative z-10 mt-6 flex justify-center lg:hidden">
                                <div className={`${fontBody} rounded-[var(--aa-radius-lg)] border border-[var(--aa-primary)] bg-[color-mix(in_srgb,var(--aa-primary)_10%,transparent)] px-5 py-2 text-sm font-bold tracking-wide text-[var(--aa-primary)] shadow-[var(--aa-shadow-sm)]`}>
                                    → Feeds into Warehouse layer
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>


                {/* ═══════════════════════════════════════════
            SECTION 02 — SINGLE SOURCE OF TRUTH
            ═══════════════════════════════════════════ */}
                <div className="mb-0">
                    <SectionHeader
                        number="02"
                        title={<>Single source of truth to query<br className="hidden md:block" /> all your data</>}
                        subtitle="Processing and centralizing data into high-performance cloud warehouses for a Single Source of Truth."
                        center
                    />

                    {/* Storage layer label */}
                    <div className="flex justify-center mb-6">
                        <FadeIn delay={0.1}>
                            <div className={`${fontBody} rounded-[var(--aa-radius-lg)] border-2 border-[var(--aa-border)] bg-[var(--aa-surface)] px-5 py-2 text-sm font-bold text-[var(--aa-text-strong)] shadow-[var(--aa-shadow-sm)]`}>Storage layer</div>
                        </FadeIn>
                    </div>

                    {/* Cloud Providers */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <ToolBadge Icon={SiGooglecloud} name="GCP GCS" iconColor="#4285F4" delay={0.2} />
                        <ToolBadge Icon={FaMicrosoft} name="Azure Blob" iconColor="#0078D4" delay={0.3} />
                        <ToolBadge Icon={FaAws} name="Amazon S3" iconColor="#FF9900" delay={0.4} />
                    </div>

                    {/* ── Desktop Oval Diagram ── */}
                    <div className="relative max-w-[900px] mx-auto hidden lg:block" style={{ height: 440 }}>
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 900 440">
                            {/* Lines from cloud providers down to exactly the oval boundary */}
                            <DrawLine d="M 250 0 L 250 40 Q 250 100, 345 113" delay={0.5} color={PRIMARY} isSolid strokeWidth={2} />
                            <DrawLine d="M 450 0 L 450 105" delay={0.6} color={PRIMARY} isSolid strokeWidth={2} />
                            <DrawLine d="M 650 0 L 650 40 Q 650 100, 555 113" delay={0.7} color={PRIMARY} isSolid strokeWidth={2} />
                            <PulseDot cx={250} cy={10} delay={0.4} color={PRIMARY} />
                            <PulseDot cx={450} cy={10} delay={0.5} color={PRIMARY} />
                            <PulseDot cx={650} cy={10} delay={0.6} color={PRIMARY} />

                            {/* Large oval */}
                            <motion.ellipse cx="450" cy="260" rx="290" ry="155" fill="none" stroke="var(--aa-border)" strokeWidth="2.5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.5, delay: 0.8 }}
                            />
                            <motion.ellipse cx="450" cy="260" rx="290" ry="155" fill="none" stroke={PRIMARY} strokeWidth="6" className="opacity-10 blur-sm"
                                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }} transition={{ duration: 2.5, delay: 0.8 }}
                            />

                            {/* Internal connections */}
                            <DrawLine d="M 306 180 L 420 260" delay={1.5} color="var(--aa-text-muted)" isSolid strokeWidth={1.5} />
                            <DrawLine d="M 558 180 L 480 260" delay={1.6} color="var(--aa-text-muted)" isSolid strokeWidth={1.5} />
                            <DrawLine d="M 230 280 L 410 280" delay={1.7} color="var(--aa-text-muted)" isSolid strokeWidth={1.5} />
                            <DrawLine d="M 490 280 L 620 280" delay={1.8} color="var(--aa-text-muted)" isSolid strokeWidth={1.5} />
                            <DrawLine d="M 450 310 L 450 370" delay={1.9} color="var(--aa-text-muted)" isSolid strokeWidth={1.5} />

                            <PulseDot cx={450} cy={275} delay={2.0} color={PRIMARY} />
                        </svg>

                        {/* Warehouse layer label */}
                        <div className="absolute z-10" style={{ left: '50%', top: '29%', transform: 'translate(-50%, -50%)' }}>
                            <FadeIn delay={1.0}><div className={`${fontHeading} rounded border border-[var(--aa-border)] bg-[var(--aa-surface-soft)] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--aa-text-strong)]`}>Warehouse layer</div></FadeIn>
                        </div>

                        {/* Tool badges */}
                        <div className="absolute z-10" style={{ left: '34%', top: '38%', transform: 'translate(-50%, -50%)' }}>
                            <ToolBadge Icon={SiDatabricks} name="Databricks" iconColor="#FF3621" delay={1.2} />
                        </div>
                        <div className="absolute z-10" style={{ left: '62%', top: '38%', transform: 'translate(-50%, -50%)' }}>
                            <ToolBadge Icon={SiSnowflake} name="Snowflake" iconColor="#29B5E8" delay={1.3} />
                        </div>
                        <div className="absolute z-10" style={{ left: '22%', top: '64%', transform: 'translate(-50%, -50%)' }}>
                            <ToolBadge Icon={FaAws} name="AWS Glue" iconColor="#FF9900" delay={1.4} />
                        </div>
                        <div className="absolute z-10" style={{ left: '50%', top: '64%', transform: 'translate(-50%, -50%)' }}>
                            <FadeIn delay={1.5}>
                                <div className={`${fontBody} flex items-center gap-2 rounded-[var(--aa-radius-xl)] border-2 border-[var(--aa-border)] bg-[var(--aa-surface)] px-5 py-3 shadow-[var(--aa-shadow-md)]`}>
                                    <FaDatabase size={22} color="#64748b" />
                                    <span className="text-[14px] font-bold text-[var(--aa-text-strong)]">ETL</span>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="absolute z-10" style={{ left: '76%', top: '64%', transform: 'translate(-50%, -50%)' }}>
                            <ToolBadge Icon={SiApacheairflow} name="Airflow" iconColor="#017CEE" delay={1.6} />
                        </div>
                        <div className="absolute z-10" style={{ left: '50%', top: '90%', transform: 'translate(-50%, -50%)' }}>
                            <ToolBadge Icon={FaMicrosoft} name="Azure Data Factory" iconColor="#0078D4" delay={1.7} />
                        </div>
                    </div>

                    {/* ── Mobile warehouse layout ── */}
                    <div className="lg:hidden mt-6">
                        <div className="text-center mb-4">
                            <span className={`${fontBody} rounded-[var(--aa-radius-lg)] border border-[var(--aa-border)] bg-[var(--aa-surface)] px-4 py-1.5 text-sm font-bold text-[var(--aa-text-strong)] shadow-[var(--aa-shadow-sm)]`}>Warehouse layer</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pb-4">
                            {warehouseTools.map((t, i) => (
                                <ToolBadge key={t.name} Icon={t.Icon} name={t.name} iconColor={t.iconColor} delay={i * 0.1} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ─── CONNECTOR 02 → 03 ─── */}
                <SectionConnector delay={0.3} />


                {/* ═══════════════════════════════════════════
            SECTION 03 — END TO END AI SOLUTIONS
            ═══════════════════════════════════════════ */}
                <div className="relative mt-8">
                    <SectionHeader
                        number="03"
                        title={<span className="text-[var(--aa-primary)]">End to End AI solutions</span>}
                        subtitle={<span className="text-[var(--aa-text-strong)]">Empower Your Business with Predictive Insights, Precision Decisions, and Seamless AI Automation.</span>}
                        center
                    />

                    <div className="w-full relative mt-8 lg:-mt-4">

                        {/* Header to Columns Branching Animation */}
                        <div className="w-full h-24 hidden lg:block relative mb-6">
                            <svg className="w-full h-full pointer-events-none" viewBox="0 0 1200 96" preserveAspectRatio="none">
                                {/* Branch Left */}
                                <DrawLine d="M 600 0 C 600 50, 200 50, 200 96" delay={0.2} color={PRIMARY} strokeWidth={2.5} />
                                <motion.polygon points="194,88 200,96 206,88" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />

                                {/* Branch Center */}
                                <DrawLine d="M 600 0 L 600 96" delay={0.4} color={PRIMARY} strokeWidth={2.5} isSolid />
                                <motion.polygon points="594,88 600,96 606,88" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} />

                                {/* Branch Right */}
                                <DrawLine d="M 600 0 C 600 50, 1000 50, 1000 96" delay={0.6} color={PRIMARY} strokeWidth={2.5} />
                                <motion.polygon points="994,88 1000,96 1006,88" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} />
                            </svg>
                        </div>

                        {/* 3-Column Vertical Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

                            {/* Column 1: Dynamic Dashboards */}
                            <div className="flex flex-col items-center w-full">
                                <div className="w-full">
                                    <AISolutionCard icon={LayoutDashboard} title="Dynamic Dashboards" description="When data speaks early, business wins faster — predictive dashboards drive performance and prevent risk" delay={0.6} />
                                </div>
                                <div className="w-full h-16 hidden lg:block overflow-visible relative -mt-3 mb-2 z-0">
                                    <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 64" preserveAspectRatio="none">
                                        <DrawLine d="M 50 0 L 50 64" color={PRIMARY} delay={1.8} strokeWidth={2} />
                                        <motion.polygon points="46,58 50,64 54,58" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.8 }} />
                                    </svg>
                                </div>
                                <div className={`${fontBody} relative z-10 mt-4 flex h-[calc(100%-1rem)] flex-col rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface)] p-4 shadow-[var(--aa-shadow-sm)] lg:mt-0`}>
                                    <FadeIn delay={2.0} className="mb-4 text-center">
                                        <h4 className={`${fontHeading} mx-auto w-fit rounded-md border border-[var(--aa-border)] bg-[color-mix(in_srgb,var(--aa-primary)_8%,transparent)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--aa-primary)]`}>Dashboard Solutions</h4>
                                    </FadeIn>
                                    <div className="flex flex-col gap-1">
                                        {aiSolutions1.map((s, i) => (
                                            <SolutionItem key={s.label} icon={s.icon} label={s.label} color={s.color} delay={2.2 + i * 0.08} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Predictive Models */}
                            <div className="flex flex-col items-center w-full">
                                <div className="w-full">
                                    <AISolutionCard icon={Sparkles} title="Predictive Models" description="Predict smarter, act faster, and lead with confidence - From prediction to performance, unlock real-time intelligence" delay={0.8} />
                                </div>
                                <div className="w-full h-16 hidden lg:block overflow-visible relative -mt-3 mb-2 z-0">
                                    <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 64" preserveAspectRatio="none">
                                        <DrawLine d="M 50 0 L 50 64" color={PRIMARY} delay={2.0} strokeWidth={2} />
                                        <motion.polygon points="46,58 50,64 54,58" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 3.0 }} />
                                    </svg>
                                </div>
                                <div className={`${fontBody} relative z-10 mt-4 flex h-[calc(100%-1rem)] flex-col rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface)] p-4 shadow-[var(--aa-shadow-sm)] lg:mt-0`}>
                                    <FadeIn delay={2.2} className="mb-4 text-center">
                                        <h4 className={`${fontHeading} mx-auto w-fit rounded-md border border-[var(--aa-border)] bg-[color-mix(in_srgb,var(--aa-primary)_8%,transparent)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--aa-primary)]`}>Predictive Solutions</h4>
                                    </FadeIn>
                                    <div className="flex flex-col gap-1">
                                        {aiSolutions2.map((s, i) => (
                                            <SolutionItem key={s.label} icon={s.icon} label={s.label} color={s.color} delay={2.4 + i * 0.08} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Agentic AI Automations */}
                            <div className="flex flex-col items-center w-full">
                                <div className="w-full">
                                    <AISolutionCard icon={Bot} title="Agentic AI Automations" description="Agentic AI doesn't just assist — it acts. Our intelligent agents automate decisions and execute workflows." delay={1.0} />
                                </div>
                                <div className="w-full h-16 hidden lg:block overflow-visible relative -mt-3 mb-2 z-0">
                                    <svg className="w-full h-full pointer-events-none" viewBox="0 0 100 64" preserveAspectRatio="none">
                                        <DrawLine d="M 50 0 L 50 64" color={PRIMARY} delay={2.2} strokeWidth={2} />
                                        <motion.polygon points="46,58 50,64 54,58" fill={PRIMARY} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 3.2 }} />
                                    </svg>
                                </div>
                                <div className={`${fontBody} relative z-10 mt-4 flex h-[calc(100%-1rem)] flex-col rounded-[var(--aa-radius-2xl)] border border-[var(--aa-border)] bg-[var(--aa-surface)] p-4 shadow-[var(--aa-shadow-sm)] lg:mt-0`}>
                                    <FadeIn delay={2.4} className="mb-4 text-center">
                                        <h4 className={`${fontHeading} mx-auto w-fit rounded-md border border-[var(--aa-border)] bg-[color-mix(in_srgb,var(--aa-primary)_8%,transparent)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[var(--aa-primary)]`}>Agentic AI Solutions</h4>
                                    </FadeIn>
                                    <div className="flex flex-col gap-1">
                                        {aiSolutions3.map((s, i) => (
                                            <SolutionItem key={s.label} icon={s.icon} label={s.label} color={s.color} delay={2.6 + i * 0.08} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Architecture