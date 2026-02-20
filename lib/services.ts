export interface ServiceStep {
    title: string;
    desc: string;
}

export interface Service {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    benefits: string[];
    process: ServiceStep[];
    image: string;
    imagePosition: string;
    icon: string;
}

export const serviceData: Record<string, Service> = {
    "rct": {
        title: "Root Canal Treatment (RCT)",
        subtitle: "Precision Endodontics for Pain Relief",
        description: "Root Canal Treatment is a specialized procedure designed to save a tooth that is severely decayed or infected. At Vandana Oral and Dental Care, we use advanced precision tools to ensure a completely painless experience.",
        longDescription: "When the pulse or nerve of a tooth becomes infected or inflamed due to deep decay, repeated dental procedures, or a crack, a root canal is necessary. Our approach involves removing the damaged area, cleaning and disinfecting it, and then filling and sealing it. This not only relieves pain but also prevents the need for extraction.",
        benefits: [
            "Complete pain relief from toothache",
            "Prevents spread of infection to other teeth",
            "Saves your natural tooth structure",
            "Restores normal biting and chewing",
            "Prevents jawbone degeneration"
        ],
        process: [
            { title: "Consultation", desc: "Digital X-rays and assessment of the infection level." },
            { title: "Numbing", desc: "Local anesthesia to ensure comfort throughout." },
            { title: "Cleaning", desc: "Precise removal of infected pulp and canal sterilization." },
            { title: "Filling", desc: "Sealing the canals with biocompatible material." },
            { title: "Restoration", desc: "Placement of a crown to protect the tooth." }
        ],
        image: "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imagePosition: "object-center",
        icon: "Activity"
    },
    "dental-implants": {
        title: "Dental Implants",
        subtitle: "Permanent Solutions for Missing Teeth",
        description: "Dental implants are the gold standard for tooth replacement. They look, feel, and function exactly like natural teeth, providing a lifelong solution for a complete smile.",
        longDescription: "An implant is a small titanium post that acts as a tooth root. It is surgically placed into your jawbone, where it bonds with the bone over a few months. Once integrated, a custom-made crown is attached, giving you a fixed, stable tooth that doesn't slip or click like dentures.",
        benefits: [
            "Next best thing to healthy, natural teeth",
            "Built to last a lifetime",
            "Prevents bone loss in the jaw",
            "No need to alter adjacent teeth",
            "Boosts confidence and appearance"
        ],
        process: [
            { title: "Initial Assessment", desc: "Bone density check and digital planning." },
            { title: "Implant Placement", desc: "Precision surgical placement of the titanium post." },
            { title: "Healing Phase", desc: "Osseointegration (bonding with bone) for 3-6 months." },
            { title: "Abutment", desc: "Attaching the connector for the crown." },
            { title: "Final Crown", desc: "Fitting the custom-crafted prosthetic tooth." }
        ],
        image: "https://images.pexels.com/photos/3845807/pexels-photo-3845807.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imagePosition: "object-[center_35%]",
        icon: "Gem"
    },
    "crowns-bridges": {
        title: "Crowns & Bridges",
        subtitle: "Restoring Strength and Beauty",
        description: "Whether you have a damaged tooth or missing gaps, our premium crowns and bridges provide the perfect structural and aesthetic restoration.",
        longDescription: "Crowns (caps) cover a damaged tooth to strengthen it and improve its appearance. Bridges are used to fill the gap left by one or more missing teeth, using the surrounding natural teeth as anchors. We use high-quality Zirconia and E-max materials for a natural finish.",
        benefits: [
            "Strengthens weakened or fractured teeth",
            "Fills unsightly gaps in your smile",
            "Durable and long-lasting restoration",
            "Custom-shaded to match natural teeth",
            "Improves speech and eating ability"
        ],
        process: [
            { title: "Preparation", desc: "Reshaping the tooth to accommodate the crown/bridge." },
            { title: "Impression", desc: "Taking digital or physical molds for precision fit." },
            { title: "Temporary Fix", desc: "Placement of a temporary crown while yours is crafted." },
            { title: "Fabrication", desc: "Expert lab work for custom-shading and sizing." },
            { title: "Cementation", desc: "Final bonding of the permanent restoration." }
        ],
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
        imagePosition: "object-center",
        icon: "Scissors"
    },
    "gum-therapy": {
        title: "Gum Therapy",
        subtitle: "The Foundation of Oral Health",
        description: "Healthy gums are vital for a healthy heart and body. Our specialized gum therapy treatments tackle gingivitis and periodontitis to prevent tooth loss.",
        longDescription: "Gum disease often goes unnoticed until it's advanced. Our periodontic treatments include deep scaling, root planing, and laser therapy to remove harmful bacteria and tartar from beneath the gum line, promoting tissue healing and reattachment.",
        benefits: [
            "Stops bleeding and swollen gums",
            "Prevents premature tooth loss",
            "Freshens breath significantly",
            "Reduces risk of systemic health issues",
            "Reduces tooth sensitivity"
        ],
        process: [
            { title: "Periodontal Exam", desc: "Measuring gum pockets and assessing bone health." },
            { title: "Deep Scaling", desc: "Removing tartar and plaque above and below gums." },
            { title: "Root Planing", desc: "Smoothing root surfaces to prevent bacteria buildup." },
            { title: "Antibiotic Therapy", desc: "Targeted medication to kill lingering infection." },
            { title: "Maintenance", desc: "Regular follow-up plan for long-term health." }
        ],
        image: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imagePosition: "object-[center_60%]",
        icon: "Baby"
    },
    "orthodontics": {
        title: "Orthodontics",
        subtitle: "Perfectly Aligned Smiles",
        description: "Straighten your teeth and correct your bite with our wide range of orthodontic solutions, from traditional braces to modern invisible aligners.",
        longDescription: "Orthodontics is more than just aesthetics; it's about correctly aligning teeth for better function and oral hygiene. We offer specialized care for children, teens, and adults using the latest technology in teeth movement.",
        benefits: [
            "Corrects crowded or crooked teeth",
            "Fixes overbites, underbites, and gaps",
            "Improves long-term dental health",
            "Boosts self-esteem and confidence",
            "Makes teeth easier to clean"
        ],
        process: [
            { title: "Scanning", desc: "3D digital scans to plan precise teeth movement." },
            { title: "Treatment Plan", desc: "Customized schedule and device selection." },
            { title: "Fitting", desc: "Placement of braces or delivery of first aligner set." },
            { title: "Adjustments", desc: "Periodic checkups to monitor progress." },
            { title: "Retention", desc: "Retainers to keep your new smile in place." }
        ],
        image: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imagePosition: "object-[center_40%]",
        icon: "Ruler"
    },
    "teeth-whitening": {
        title: "Teeth Whitening",
        subtitle: "Illuminate Your Smile",
        description: "Professional whitening is the safest and most effective way to brighten your teeth and remove years of staining from coffee, tea, and aging. ",
        longDescription: "Over-the-counter products often yield disappointing results. Our clinic-grade whitening uses specialized gels and light-activation to penetrate deep into the enamel, lifting stains and whitening your teeth by several shades in just one visit.",
        benefits: [
            "Instant results in a single session",
            "Safest procedure for tooth enamel",
            "Removes deep, stubborn stains",
            "Customized shades for a natural look",
            "Long-lasting brightness"
        ],
        process: [
            { title: "Cleaning", desc: "Surface polishing to ensure even whitening." },
            { title: "Protection", desc: "Barriers placed to protect sensitive gums." },
            { title: "Application", desc: "Precisely applied high-potency whitening gel." },
            { title: "Activation", desc: "Specific light use to speed up the process." },
            { title: "Polishing", desc: "Final rinse and sensitivity coating application." }
        ],
        image: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg?auto=compress&cs=tinysrgb&w=1200",
        imagePosition: "object-[center_80%]",
        icon: "Sparkles"
    }
};
