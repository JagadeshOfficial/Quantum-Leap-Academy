"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Course } from "@/lib/courses";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";

interface DownloadProps {
    course: Course;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    text?: string;
}

const savePdf = (doc: jsPDF, filename: string) => {
    // Explicitly create blob with PDF type
    const blob = doc.output('blob');
    saveAs(blob, filename);
};

export function DownloadCurriculumButton({ course, className, variant = "outline", text = "Download Detailed Syllabus (PDF)" }: DownloadProps) {

    const handleDownload = () => {
        if (course.syllabusUrl) {
            saveAs(course.syllabusUrl, `${course.slug}-syllabus.pdf`);
            return;
        }

        const doc = new jsPDF();

        // Set document properties
        doc.setProperties({
            title: `${course.name} Syllabus`,
            subject: course.tagline,
            author: 'Mathisi Academy',
            creator: 'Mathisi Academy'
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
        doc.text(`Duration: ${course.duration} | Learning Hours: ${course.learningHours}`, 15, 35);

        // Curriculum Content
        let yPos = 50;

        autoTable(doc, {
            startY: yPos,
            head: [['Module', 'Title', 'Topics']],
            body: course.learningPath.map((item, index) => [
                `Module ${index + 1}`,
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
        doc.text("Mathisi Academy | www.mathisi.info", pageWidth / 2, footerY, { align: "center" });

        savePdf(doc, `${course.slug}-syllabus.pdf`);
    };

    return (
        <Button variant={variant} className={className} onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" /> {text}
        </Button>
    );
}

export function DownloadBrochureButton({ course, className, variant = "default", text = "Download Brochure (PDF)" }: DownloadProps) {
    const handleDownload = () => {
        if (course.brochureUrl) {
            saveAs(course.brochureUrl, `${course.slug}-brochure.pdf`);
            return;
        }

        const doc = new jsPDF();

        // Set document properties
        doc.setProperties({
            title: `${course.name} Brochure`,
            subject: course.tagline,
            author: 'Mathisi Academy',
            creator: 'Mathisi Academy'
        });

        const pageWidth = doc.internal.pageSize.getWidth();

        // Title Page Styling
        // Background
        doc.setFillColor(15, 23, 42); // slate-900 background
        doc.rect(0, 0, pageWidth, doc.internal.pageSize.getHeight(), "F");

        // Logo / Brand
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.text("MATHISI ACADEMY", pageWidth / 2, 20, { align: "center" });

        // Course Title
        doc.setFontSize(28);
        doc.setFont("helvetica", "bold");
        const titleLines = doc.splitTextToSize(course.name, pageWidth - 40);
        doc.text(titleLines, pageWidth / 2, 80, { align: "center" });

        // Tagline
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(203, 213, 225); // slate-300
        const taglineLines = doc.splitTextToSize(course.tagline, pageWidth - 60);
        doc.text(taglineLines, pageWidth / 2, 110, { align: "center" });

        // Course Key Info
        doc.setFillColor(30, 41, 59); // lighter slate
        doc.roundedRect(pageWidth / 2 - 80, 140, 160, 40, 3, 3, "F");

        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text(`Duration: ${course.duration}`, pageWidth / 2, 155, { align: "center" });
        doc.text(`Rating: ${course.rating}/5.0`, pageWidth / 2, 165, { align: "center" });

        // Add a new page for meaningful content
        doc.addPage();

        // Page 2: Header
        doc.setFillColor(241, 245, 249);
        doc.rect(0, 0, pageWidth, 30, "F");
        doc.setFontSize(16);
        doc.setTextColor(15, 23, 42);
        doc.text("Program Highlights", 15, 20);

        // Highlights List
        let yPos = 50;
        doc.setFontSize(12);
        course.highlights.forEach((highlight) => {
            doc.setFillColor(15, 23, 42);
            doc.circle(20, yPos - 1.5, 1, "F");
            doc.text(highlight, 25, yPos);
            yPos += 15;
        });

        // Tools
        yPos += 10;
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Tools We Cover", 15, yPos);

        yPos += 15;
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        const toolsText = course.tools.join(", ");
        const splitTools = doc.splitTextToSize(toolsText, pageWidth - 30);
        doc.text(splitTools, 15, yPos);

        // Placement / Contact
        const footerY = doc.internal.pageSize.getHeight() - 40;
        doc.setDrawColor(203, 213, 225);
        doc.line(15, footerY - 10, pageWidth - 15, footerY - 10);

        doc.setFontSize(10);
        doc.setTextColor(100, 116, 139);
        doc.text("Start your journey with us today!", 15, footerY);
        doc.text("Contact: admissions@mathisi.info", 15, footerY + 6);
        doc.text("Website: www.mathisi.info", 15, footerY + 12);

        savePdf(doc, `${course.slug}-brochure.pdf`);
    };

    return (
        <Button variant={variant} className={className} onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" /> {text}
        </Button>
    );
}
