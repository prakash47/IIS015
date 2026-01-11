export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Bharat Yatra Co.</h3>
                        <p className="text-gray-400">Crafting unforgettable journeys across India.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/destinations" className="hover:text-white">Destinations</a></li>
                            <li><a href="/packages" className="hover:text-white">Packages</a></li>
                            <li><a href="/about" className="hover:text-white">About Us</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <p className="text-gray-400">hello@bharatyatraco.com</p>
                        <p className="text-gray-400">+91 98765 43210</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Bharat Yatra Co. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
