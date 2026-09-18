function SkeletionLoading() {
  return (
    <div
      className="
        w-full max-w-5xl
        mx-auto
        mt-6 sm:mt-10
        p-4 sm:p-6
        bg-white rounded-lg shadow-md
        animate-pulse
      "
    >
      {/* Heading Skeleton */}
      <div className="h-7 sm:h-8 bg-gray-200 rounded w-full sm:w-1/2 mb-8" />

      {/* Section Heading */}
      <div className="h-6 bg-gray-200 rounded w-3/4 sm:w-1/3 mb-6" />

      {/* Inputs Skeleton */}
      <div className="space-y-6">

        {/* Title */}
        <div>
          <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>

        {/* Subtitle */}
        <div>
          <div className="h-4 bg-gray-200 rounded w-20 mb-2" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>

        {/* Description */}
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
          <div className="h-24 bg-gray-200 rounded w-full" />
        </div>

        {/* Selects and Price */}
        <div
          className="
            flex flex-col
            sm:flex-row
            gap-4
          "
        >
          <div className="h-10 bg-gray-200 rounded flex-1" />
          <div className="h-10 bg-gray-200 rounded flex-1" />
          <div className="h-10 bg-gray-200 rounded flex-1" />
        </div>

        {/* Thumbnail */}
        <div
          className="
            w-full
            max-w-xs
            sm:w-72
            h-40
            bg-gray-200
            rounded
          "
        />

        {/* Buttons */}
        <div
          className="
            flex flex-col
            sm:flex-row
            gap-4
          "
        >
          <div className="h-10 w-full sm:w-24 bg-gray-200 rounded" />
          <div className="h-10 w-full sm:w-24 bg-gray-200 rounded" />
        </div>

      </div>
    </div>
  );
}

export { SkeletionLoading };