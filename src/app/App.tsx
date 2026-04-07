import logo from "figma:asset/3a69eea8c4adabffc47d304e0bdbffa57443134d.png";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex flex-col items-center gap-8 px-6">
        {/* Logo */}
        <img src={logo} alt="Exosearch" className="w-64 md:w-80 h-auto" />
        
        {/* Launch message */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl md:text-4xl text-slate-900 text-center font-['Inter']">
            Launching April 2026
          </h1>
          <a 
            href="mailto:info@exosearch.io" 
            className="text-lg md:text-xl text-slate-600 hover:text-slate-900 transition-colors font-['Inter']"
          >
            info@exosearch.io
          </a>
        </div>
      </div>
    </div>
  );
}