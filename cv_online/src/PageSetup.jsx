import Grid from "./Grid";
import SparklesPreview from "../components/ui/SparklesPreview";

function PageSetup() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-neutral-950">
            {/* Sparkles background */}
            <div className="absolute inset-0 z-0">
                <SparklesPreview />
            </div>

            {/* Grid with padding around the edges */}
            <div className="absolute inset-8 z-10">
                <Grid />
            </div>
        </main>
    );
}

export default PageSetup;