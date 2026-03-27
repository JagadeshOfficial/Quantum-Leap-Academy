"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Course } from "@/lib/courses";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { LeadCaptureModal } from "@/components/course/lead-capture-modal";

interface DownloadProps {
    course: Course;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    text?: string;
    showLeadCapture?: boolean;
}

const savePdf = (doc: jsPDF, filename: string) => {
    // Explicitly create blob with PDF type
    const blob = doc.output('blob');
    saveAs(blob, filename);
};

export function DownloadCurriculumButton({ course, className, variant = "outline", text = "Download Detailed Syllabus", showLeadCapture = true }: DownloadProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const performDownload = () => {
        if (course.syllabusUrl) {
            saveAs(course.syllabusUrl, `${course.slug} -syllabus.pdf`);
            return;
        }

        const doc = new jsPDF();

        // Set document properties
        doc.setProperties({
            title: `${course.name} Syllabus`,
            subject: course.tagline,
            author: 'Mathisi',
            creator: 'Mathisi'
        });

        const pageWidth = doc.internal.pageSize.getWidth();

        // Header
        doc.setFillColor(241, 245, 249); // slate-100
        doc.rect(0, 0, pageWidth, 40, "F");

        doc.setFontSize(22);
        doc.setTextColor(15, 23, 42); // slate-900
        doc.text(course.name, 15, 20);

        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105); // slate-600
        doc.text(course.tagline, 15, 28);

        doc.setFontSize(10);
        doc.text(`Duration: ${course.duration} | Learning Hours: ${course.learningHours} `, 15, 35);

        // Curriculum Content
        let yPos = 50;

        autoTable(doc, {
            startY: yPos,
            head: [['Module', 'Title', 'Topics']],
            body: course.learningPath.map((item, index) => [
                `Module ${index + 1} `,
                item.title,
                item.topics ? item.topics.join(", ") : ""
            ]),
            theme: 'grid',
            headStyles: { fillColor: [15, 23, 42], textColor: 255 },
            styles: { fontSize: 10, cellPadding: 3 },
            columnStyles: {
                0: { cellWidth: 25 },
                1: { cellWidth: 40 },
                // 2: { cellWidth: 'auto' }
            }
        });

        // Tools Section
        const finalY = (doc as any).lastAutoTable.finalY + 10;
        doc.setFontSize(14);
        doc.setTextColor(15, 23, 42);
        doc.text("Tools & Technologies Covered:", 15, finalY);

        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        const splitTools = doc.splitTextToSize(course.tools.join(", "), pageWidth - 30);
        doc.text(splitTools, 15, finalY + 7);

        // Footer
        const footerY = doc.internal.pageSize.getHeight() - 10;
        doc.setFontSize(8);
        doc.setTextColor(156, 163, 175);
        doc.text("Mathisi | www.mathisi.in", pageWidth / 2, footerY, { align: "center" });

        savePdf(doc, `${course.slug}-syllabus.pdf`);
    };

    const handleClick = () => {
        if (showLeadCapture) {
            setIsModalOpen(true);
        } else {
            performDownload();
        }
    };

    return (
        <>
            <Button variant={variant} className={className} onClick={handleClick}>
                <Download className="mr-2 h-4 w-4" /> {text}
            </Button>
            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={performDownload}
                title="Download Syllabus"
                description="Enter your details to download the complete syllabus."
                courseName={course.name}
                courseSlug={course.slug}
            />
        </>
    );
}

export function DownloadBrochureButton({ course, className, variant = "default", text = "Download Brochure", showLeadCapture = true }: DownloadProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const performDownload = () => {
        if (course.brochureUrl) {
            saveAs(course.brochureUrl, `${course.slug}-brochure.pdf`);
            return;
        }

        // Open the beautiful printable brochure page
        window.open(`/courses/${course.slug}/brochure`, "_blank");
    };

    const handleClick = () => {
        if (showLeadCapture) {
            setIsModalOpen(true);
        } else {
            performDownload();
        }
    };

    return (
        <>
            <Button variant={variant} className={className} onClick={handleClick}>
                <Download className="mr-2 h-4 w-4" /> {text}
            </Button>
            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={performDownload}
                title="Download Brochure"
                description="Get the full course brochure by verifying these details."
                courseName={course.name}
                courseSlug={course.slug}
            />
        </>
    );
}

