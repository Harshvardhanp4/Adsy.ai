const ServiceAnnouncement = () => {
    return (
        <div className="fixed top-24 left-0 right-0 z-40 px-4">
            <div className="max-w-6xl mx-auto rounded-xl border border-amber-300/25 bg-amber-300/10 backdrop-blur-md px-4 py-3 text-sm text-amber-100">
                <span className="font-semibold">Service Update:</span> We are currently upgrading our generation API. Image and video generation is temporarily unavailable. We will be back shortly.
            </div>
        </div>
    )
}

export default ServiceAnnouncement