
const Loader = () => {

    return (<>
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="h-8 w-32 bg-primary/20 rounded-md mx-auto mb-4 animate-shimmer"></div>
                <div className="h-4 w-48 bg-muted rounded-md mx-auto animate-shimmer"></div>
                <div className="mt-8 space-y-3">
                    <div className="h-12 bg-muted/50 rounded-md animate-shimmer"></div>
                    <div className="h-12 bg-muted/50 rounded-md animate-shimmer"></div>
                    <div className="h-12 bg-muted/50 rounded-md animate-shimmer"></div>
                </div>
            </div>
        </div>
    </>);
};

export default Loader;