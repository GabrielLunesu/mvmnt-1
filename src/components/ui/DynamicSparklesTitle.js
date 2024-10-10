'use client';

import SparklesCore from '@/components/ui/sparkles';

export default function DynamicSparklesTitle({ title }) {
    return (
        <div className="relative h-[200px] w-full">
            <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-white text-center z-10">
                {title}
            </h1>
        </div>
    );
}