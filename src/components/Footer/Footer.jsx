import img1 from '../../assets/Screenshot_49-removebg-preview (1).png';

const Footer = () => {
    return (
        <div className="w-full bg-gray-100 py-10">
            <footer className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
                   
                   
                    <div>
                        <div className="flex items-center justify-center md:justify-start font-bold text-2xl">
                            <img src={img1} alt="Company Logo" className="w-20 mb-4" />
                            <span className="text-[#006dc7]">Collab</span>
                            <span className="">Nest</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-4">
                            CollabNest is a powerful team collaboration platform designed to streamline communication, task management, and file sharing.
                        </p>
                        <h4 className="text-xl font-semibold text-gray-800">Follow Us</h4>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2">
                            <a href="#" aria-label="Facebook">
                            <img  src="https://img.icons8.com/fluency/48/facebook-new.png" className='w-8 h-8 hover:transition-all hover:-translate-y-2' alt="facebook-new"/>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                            <img  src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"  className='w-8 h-8 hover:transition-all hover:-translate-y-2'/>
                            </a>
                            <a href="#" aria-label="Instagram">
                            <img  src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"  className='w-8 h-8 hover:transition-all hover:-translate-y-2'/>
                            </a>
                            <a href="#" aria-label="Twitter">
                            <img src="https://img.icons8.com/color/48/twitterx--v1.png"  className='w-8 h-8 hover:transition-all hover:-translate-y-2' alt="twitterx--v1"/>
                            </a>
                            <a href="#" aria-label="Pinterest">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/pinterest--v1.png"  className='w-8 h-8 hover:transition-all hover:-translate-y-2' alt="pinterest--v1"/>
                            </a>
                        </div>
                    </div>
                    
                   
                    <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><a href="#">Recruitment Services</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Security Measures</a></li>
                            <li><a href="#">Copyright Information</a></li>
                        </ul>
                    </div>
                    
                 
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Events</a></li>
                        </ul>
                    </div>
                    
            
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Disclaimer</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                        </ul>
                    </div>
                </div>
             
                <div className="text-center text-gray-600 text-sm mt-8 border-t pt-4">
                    &copy; {new Date().getFullYear()} All Rights Reserved by <span className="font-semibold">CollabNest</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
