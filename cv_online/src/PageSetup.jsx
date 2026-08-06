import Grid from "./Grid";
import SparklesPreview from "../components/ui/SparklesPreview";

function PageSetup() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-neutral-950">
            {/* Sparkles background */}
            <div className="fixed inset-0 z-0">
                <SparklesPreview />
            </div>

            {/* Grid with padding around the edges */}
            <div className="relative z-10 p-8">
                <Grid />
            </div>
        </main>
    );
}

export default PageSetup;