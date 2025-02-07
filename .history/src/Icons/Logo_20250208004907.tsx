export function Logo() {
    return (
        <div className="flex items-center gap-2">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32"
                viewBox="0 0 24 24" 
                className="w-8 h-8"
                fill="currentColor"
            >
                <path d="M12 3L4.5 15h15L12 3z M12 16.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
            </svg>
            <span className="text-xl font-bold">Brainly</span>
        </div>
    )
}