const Footer = () => {
    return (
        <footer className="bg-[#161614] border-t border-gray-800/30">
            {/* Main Footer Content */}
            <div className="max-w-[1800px] mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-white rounded-lg flex items-center justify-center">
                                <span className="text-[#161614] text-lg font-extrabold">G</span>
                            </div>
                            <span className="text-white text-2xl font-bold tracking-wide">GROKAI</span>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                            An innovative AI project simplifying technology for individuals and businesses. Making advanced AI accessible for everyone.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons */}
    
                            <a href="https://x.com/grokisol?s=21" className="w-10 h-10 bg-gray-800 hover:bg-[#000000] rounded-lg flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://t.me/grokAIoffical" className="w-10 h-10 bg-gray-800 hover:bg-[#0088cc] rounded-lg flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#00D4FF] rounded-lg flex items-center justify-center transition-all duration-300 group">
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">About GROKAI</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Whitepaper</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">How to Buy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Contract Address</a></li>
                        </ul>
                    </div>

                    {/* AI Features */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">AI Features</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Analyze Data</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Automate Tasks</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Decision Making</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Drive Creativity</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Documentation</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800/30">
                <div className="max-w-[1800px] mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} GROKAI. All rights reserved. Powered by AI Innovation.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-[#00D4FF] transition-colors duration-300">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;