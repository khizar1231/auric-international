import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Upload, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function CasualWearForm({ onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    email: '',
    whatsapp: '',
    products: [],
    selectedColor: '',
    customColor: '',
    fabricType: '',
    fabricGSM: '',
    customGSM: '',
    vintageEffect: '',
    customVintage: '',
    fitStyle: '',
    customFit: '',
    printingTechnique: '',
    rhinestones: '',
    customRhinestones: '',
    labelsBranding: '',
    customLabels: '',
    selectedSizes: [],
    customSizeNotes: '',
    quantityOption: '',
    customQuantity: '',
    additionalNotes: '',
    files: []
  });

  const [submitted, setSubmitted] = useState(false);

  // Data mapped directly from uploaded screenshots
  const productCategories = [
    'T-Shirt', 'Sweatshirt', 'Hoodie', 'Zip Hoodie', 'Joggers', 'Shorts',
    'Cargo Pants', 'Jacket', 'Varsity Jacket', 'Tracksuit', 'Tank Top', 'Caps',
    'Bennies', 'Knitted jersy', 'WIND BREAKER', 'VEST'
  ];

  const colorSwatches = [
    { name: 'Black', hex: '#000000' },
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Red', hex: '#E53E3E' },
    { name: 'Navy', hex: '#1E3A8A' },
    { name: 'Grey', hex: '#9CA3AF' },
    { name: 'Dark Green', hex: '#065F46' },
    { name: 'Lime Green', hex: '#4ADE80' },
    { name: 'Yellow', hex: '#FACC15' },
    { name: 'Purple', hex: '#9333EA' },
    { name: 'Light Blue', hex: '#E0E7FF' },
    { name: 'Pink', hex: '#F472B6' }
  ];

  const fabricTypes = [
    '100% Cotton', 'Cotton Jersey', 'Cotton Double Jersey', '65/35 Cotton Polyester Blend',
    'Cotton Spandex', 'Cotton Fleece', 'French Terry', 'Popcorn Fleece',
    'Camouflage Fleece / Terry', 'Animal Print Fleece / Terry', 'Scuba', 'Lycra / Spandex',
    'Polyester', 'Nylon', 'Mesh', 'Denim', 'Washed Denim', 'Twill', 'Corduroy'
  ];

  const fabricGSMs = [
    '160 GSM', '180 GSM', '200 GSM', '220 GSM', '240 GSM', '260 GSM',
    '280 GSM', '300 GSM', '320 GSM', '350 GSM', '380 GSM', '400 GSM',
    '450 GSM', '500 GSM', 'Custom GSM:'
  ];

  const vintageEffects = [
    'Plain (No Wash)', 'Acid Wash', 'Stone Wash', 'Sun Fade',
    'Pigment Dye', 'Dirty Wash', 'Vintage Wash', 'Snow Wash', 'Custom Vintage Effect:'
  ];

  const fitStyles = [
    'Regular Fit', 'Oversized Fit', 'Boxy Fit', 'Cropped Fit',
    'Slim Fit', 'Relaxed Fit', 'Baggy Fit', 'Drop Shoulder', 'Muscle Fit', 'Custom Measurement:'
  ];

  const printingTechniques = [
    'Screen Printing', 'Digital Printing', 'DTF Print', 'DTG Print', 'Sublimation',
    'Puff Print', 'High Density Print', 'Reflective Print', 'Glitter Print',
    'Foil Print', 'Glow in the Dark', 'Silicone Print', 'Rubber Print', 'Embroidery',
    'Flat Embroidery', '3D Puff Embroidery', 'Chenille Embroidery', 'Applique Embroidery', 'Mixed Media'
  ];

  const rhinestoneOptions = [
    'Random Sheet', 'Custom Logo', 'Custom Artwork', 'Custom Rhinestone Requirement:'
  ];

  const labelOptions = [
    'Neck Woven Label', 'Printed Label', 'Wash Care Label', 'Hang Tag', 'Other Labels', 'Custom Label Requirement:'
  ];

  const sizeRanges = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];
  const quantityOptions = ['Sample', '10 UNITS', '20 UNITS', '30 UNITS', '50 UNITS', '100 UNITS', '100+ Pieces'];

  // Toggle multi-select array fields
  const handleProductToggle = (prod) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(prod)
        ? prev.products.filter(p => p !== prod)
        : [...prev.products, prod]
    }));
  };

  const handleSizeToggle = (size) => {
    setFormData(prev => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(size)
        ? prev.selectedSizes.filter(s => s !== size)
        : [...prev.selectedSizes, size]
    }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({ ...prev, files: [...prev.files, ...Array.from(e.target.files)] }));
  };

  // Compile full text specification payload and dispatch to WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const targetWhatsAppNumber = '923709085311';

    const message = `
*NEW CASUALWEAR SPECIFICATION INQUIRY*
------------------------------------
*1. CONTACT INFORMATION*
• *Full Name:* ${formData.fullName || 'N/A'}
• *Brand Name:* ${formData.brandName || 'N/A'}
• *Email:* ${formData.email || 'N/A'}
• *WhatsApp No:* ${formData.whatsapp || 'N/A'}

*2. PRODUCT DETAILS*
• *Items Selected:* ${formData.products.length > 0 ? formData.products.join(', ') : 'None selected'}

*3. COLOR PREFERENCE*
• *Color Selected:* ${formData.selectedColor || 'None'} ${formData.customColor ? `(${formData.customColor})` : ''}

*4. FABRIC & FIT SPECIFICATIONS*
• *Fabric Type:* ${formData.fabricType || 'N/A'}
• *Fabric GSM:* ${formData.fabricGSM === 'Custom GSM:' ? `Custom (${formData.customGSM})` : (formData.fabricGSM || 'N/A')}
• *Vintage Wash:* ${formData.vintageEffect === 'Custom Vintage Effect:' ? `Custom (${formData.customVintage})` : (formData.vintageEffect || 'N/A')}
• *Fit Style:* ${formData.fitStyle === 'Custom Measurement:' ? `Custom (${formData.customFit})` : (formData.fitStyle || 'N/A')}

*5. PRINTING & BRANDING*
• *Printing Tech:* ${formData.printingTechnique || 'N/A'}
• *Rhinestones:* ${formData.rhinestones === 'Custom Rhinestone Requirement:' ? `Custom (${formData.customRhinestones})` : (formData.rhinestones || 'N/A')}
• *Labels & Branding:* ${formData.labelsBranding === 'Custom Label Requirement:' ? `Custom (${formData.customLabels})` : (formData.labelsBranding || 'N/A')}

*6. SIZES & QUANTITIES*
• *Sizes Required:* ${formData.selectedSizes.length > 0 ? formData.selectedSizes.join(', ') : 'None selected'}
• *Size Chart Notes:* ${formData.customSizeNotes || 'None'}
• *Quantity Option:* ${formData.quantityOption || 'N/A'}
• *Custom Quantity:* ${formData.customQuantity || 'N/A'}

*7. ADDITIONAL INSTRUCTIONS*
${formData.additionalNotes || 'No additional notes provided.'}
------------------------------------
*Uploaded Artwork Files:* ${formData.files.length} file(s) attached in local session.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    // Trigger WhatsApp link
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/90 backdrop-blur-xl border border-white/90 rounded-3xl p-10 text-center shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-amber-500 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">Inquiry Forwarded to WhatsApp!</h2>
        <p className="text-slate-600 max-w-lg mx-auto text-sm mb-6">
          Your full specification has been compiled. If WhatsApp did not open automatically, please click below.
        </p>
        <button onClick={onBack} className="px-6 py-3 rounded-xl bg-slate-900 text-amber-400 font-bold text-sm hover:bg-slate-800 transition">
          Return to Category Hub
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Direct Production Inquiry
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Casualwear Custom Specification Sheet</h2>
        <p className="text-xs text-slate-500">Fill out your required garment details below to generate a production quote directly via WhatsApp.</p>
      </div>

      {/* User Information */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Client & Brand Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
            <input type="text" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your full name" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brand / Company Name *</label>
            <input type="text" required value={formData.brandName} onChange={e => setFormData({ ...formData, brandName: e.target.value })} placeholder="Your clothing label" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="name@brand.com" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number *</label>
            <input type="text" required value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="+1 (555) 000-0000" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500" />
          </div>
        </div>
      </div>

      {/* 1. Product Details Grid */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">1. Product Details <span className="text-xs text-slate-400 font-normal">(Select all that apply)</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {productCategories.map((prod, idx) => {
            const isSelected = formData.products.includes(prod);
            return (
              <button
                type="button"
                key={idx}
                onClick={() => handleProductToggle(prod)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                  isSelected ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                <span>{prod}</span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-slate-300'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color Selection */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">2. Color <span className="text-xs text-slate-400 font-normal">(Select fabric colors)</span></h3>
        <div className="flex flex-wrap gap-2 items-center">
          {colorSwatches.map((color, idx) => {
            const isSelected = formData.selectedColor === color.name;
            return (
              <button
                type="button"
                key={idx}
                onClick={() => setFormData({ ...formData, selectedColor: color.name })}
                className={`w-8 h-8 rounded-full border-2 transition-transform ${
                  isSelected ? 'ring-2 ring-amber-500 scale-110 border-white' : 'border-slate-300 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            );
          })}
        </div>
        <input type="text" placeholder="Write custom color..." value={formData.customColor} onChange={e => setFormData({ ...formData, customColor: e.target.value })} className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500" />
      </div>

      {/* 3. Fabric & Material Specifications */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">3. Fabric Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fabric Type</label>
            <select value={formData.fabricType} onChange={e => setFormData({ ...formData, fabricType: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Fabric Type</option>
              {fabricTypes.map((f, idx) => <option key={idx} value={f}>{f}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fabric GSM</label>
            <select value={formData.fabricGSM} onChange={e => setFormData({ ...formData, fabricGSM: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Fabric GSM</option>
              {fabricGSMs.map((g, idx) => <option key={idx} value={g}>{g}</option>)}
            </select>
            {formData.fabricGSM === 'Custom GSM:' && (
              <input type="text" placeholder="Specify Custom GSM..." value={formData.customGSM} onChange={e => setFormData({ ...formData, customGSM: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Vintage Effects / Washes</label>
            <select value={formData.vintageEffect} onChange={e => setFormData({ ...formData, vintageEffect: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Vintage Effects</option>
              {vintageEffects.map((v, idx) => <option key={idx} value={v}>{v}</option>)}
            </select>
            {formData.vintageEffect === 'Custom Vintage Effect:' && (
              <input type="text" placeholder="Specify Vintage Effect..." value={formData.customVintage} onChange={e => setFormData({ ...formData, customVintage: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fit Style</label>
            <select value={formData.fitStyle} onChange={e => setFormData({ ...formData, fitStyle: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Fit Style</option>
              {fitStyles.map((fit, idx) => <option key={idx} value={fit}>{fit}</option>)}
            </select>
            {formData.fitStyle === 'Custom Measurement:' && (
              <input type="text" placeholder="Specify Custom Measurement..." value={formData.customFit} onChange={e => setFormData({ ...formData, customFit: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
            )}
          </div>
        </div>
      </div>

      {/* 4. Printing, Rhinestones & Branding */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">4. Customization & Branding</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Printing Technique</label>
            <select value={formData.printingTechnique} onChange={e => setFormData({ ...formData, printingTechnique: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Printing Technique</option>
              {printingTechniques.map((pt, idx) => <option key={idx} value={pt}>{pt}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rhinestones</label>
            <select value={formData.rhinestones} onChange={e => setFormData({ ...formData, rhinestones: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Rhinestones</option>
              {rhinestoneOptions.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
            </select>
            {formData.rhinestones === 'Custom Rhinestone Requirement:' && (
              <input type="text" placeholder="Specify Rhinestone Details..." value={formData.customRhinestones} onChange={e => setFormData({ ...formData, customRhinestones: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Labels & Branding</label>
            <select value={formData.labelsBranding} onChange={e => setFormData({ ...formData, labelsBranding: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500">
              <option value="">Select Labels & Branding</option>
              {labelOptions.map((lbl, idx) => <option key={idx} value={lbl}>{lbl}</option>)}
            </select>
            {formData.labelsBranding === 'Custom Label Requirement:' && (
              <input type="text" placeholder="Specify Label Details..." value={formData.customLabels} onChange={e => setFormData({ ...formData, customLabels: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
            )}
          </div>
        </div>
      </div>

      {/* 5. Size Range & Quantities */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">5. Size Range & Quantity</h3>
        
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Select Sizes Required</label>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {sizeRanges.map((sz, idx) => {
              const isSelected = formData.selectedSizes.includes(sz);
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSizeToggle(sz)}
                  className={`py-2 rounded-xl text-xs font-black transition-all border ${
                    isSelected ? 'bg-amber-500 text-white border-amber-500 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
          <input type="text" placeholder="Write custom size chart instructions..." value={formData.customSizeNotes} onChange={e => setFormData({ ...formData, customSizeNotes: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Batch Quantity</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quantityOptions.map((qty, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => setFormData({ ...formData, quantityOption: qty })}
                className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                  formData.quantityOption === qty ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {qty}
              </button>
            ))}
          </div>
          <input type="text" placeholder="Write custom target quantity..." value={formData.customQuantity} onChange={e => setFormData({ ...formData, customQuantity: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500" />
        </div>
      </div>

      {/* 6. Additional Notes & File Attachments */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Additional Notes / Special Instructions</label>
          <textarea rows="3" value={formData.additionalNotes} onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })} placeholder="Write any special instructions or additional details here..." className="w-full bg-white/70 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-500"></textarea>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Attach Artwork / Tech Pack (Vector / PDF)</label>
          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-2xl p-4 text-center bg-white/40 transition relative cursor-pointer">
            <input type="file" multiple onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            <Upload className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-xs text-slate-600 font-medium">Attach files (AI, PSD, PDF, PNG)</p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2">
        <MessageSquare className="w-5 h-5" /> Send Order Inquiry via WhatsApp (+92 370 9085311)
      </button>
    </form>
  );
}