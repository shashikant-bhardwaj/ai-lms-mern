function SkeletionLoading() {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md animate-pulse">

            {/* Heading Skeleton */}
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-8"></div>

            {/* Section Heading */}
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>

            {/* Inputs Skeleton */}
            <div className="space-y-6">

                <div>
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>

                <div>
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>

                <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-24 bg-gray-200 rounded w-full"></div>
                </div>

                {/* Selects */}
                <div className="flex gap-4">
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                    <div className="h-10 bg-gray-200 rounded flex-1"></div>
                </div>

                {/* Thumbnail */}
                <div className="h-40 w-72 bg-gray-200 rounded"></div>

                {/* Buttons */}
                <div className="flex gap-4">
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>

            </div>
        </div>
    );
}

export { SkeletionLoading }