import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Upload, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function LeatherWearForm({ onBack }) {
  const [formData, setFormData] = useState({
    // Client Information
    fullName: '',
    companyName: '',
    email: '',
    whatsapp: '',

    // 1. Product Details
    products: [],
    customProductName: '',

    // 2. Upload Your Design & 3. Color
    selectedColor: '',
    customColor: '',
    files: [],

    // 4. Technical Specifications
    material: '',
    styleModel: '',
    leatherFinish: '',
    printingBranding: '',

    // 5. Size Range & 6. Quantity
    selectedSizes: [],
    customSizeNotes: '',
    quantityOption: '',
    customQuantity: '',

    // 7. Additional Notes
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Exact Options Mapped from Uploaded Screenshots
  const leatherProducts = [
    'Leather Jackets', 'Varsity Jackets', 'Bomber Jackets', 'Biker Jackets',
    'Hooded Leather Jackets', 'Leather Vests', 'Leather coats', 'Leather Pants',
    'Leather Shorts', 'Leather Shirts', 'Leather Gloves', 'Leather Belts',
    'Leather wallets', 'Leather Accessories'
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

  const materials = [
    'Genuine Leather Cowhide Leather', 'Sheepskin Leather', 'Lambskin Leather',
    'Goatskin Leather', 'Buffalo Leather', 'Suede Leather',
    'Nubuck Leather', 'PU / Synthetic Leather'
  ];

  const styleModels = [
    'Slim Fit', 'Regular Fit', 'Oversized Fit', 'Vintage Style',
    'Biker Style', 'Bomber Style', 'Varsity Style', 'Streetwear Style',
    'Fashion Style', 'Casual Style'
  ];

  const leatherFinishes = [
    'Smooth Original Leather', 'Matte Finish', 'Glossy Finish',
    'Grain Leather', 'Suede Leather', 'Vintage Finish'
  ];

  const printingBrandings = [
    'Screen Print', 'Digital Print', 'Embossed / Debossed', 'Flat Embroidery',
    '3D Embroidery', 'Leather Patch', 'PVC Patch', 'Silicone Patch',
    'Woven Label', 'Printed Label'
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

  const handleSizeToggle = (sz) => {
    setFormData(prev => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(sz)
        ? prev.selectedSizes.filter(s => s !== sz)
        : [...prev.selectedSizes, sz]
    }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...Array.from(e.target.files)]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetWhatsAppNumber = '923709085311';

    const colorVal = `${formData.selectedColor || 'N/A'}${formData.customColor ? ` (${formData.customColor})` : ''}`;

    const tableMessage = `*NEW LEATHERWEAR SPECIFICATION INQUIRY*

\`\`\`
+-----------------------+----------------------------------+
| SPECIFICATION FIELD   | CLIENT SELECTION                 |
+-----------------------+----------------------------------+
| Full Name             | ${formData.fullName || 'N/A'}
| Company / Brand       | ${formData.companyName || 'N/A'}
| Email                 | ${formData.email || 'N/A'}
| WhatsApp No           | ${formData.whatsapp || 'N/A'}
+-----------------------+----------------------------------+
| Products Selected     | ${formData.products.length > 0 ? formData.products.join(', ') : 'None'}
| Custom Item Name      | ${formData.customProductName || 'N/A'}
| Color Preference      | ${colorVal}
+-----------------------+----------------------------------+
| Material / Hide       | ${formData.material || 'N/A'}
| Style / Model         | ${formData.styleModel || 'N/A'}
| Leather Finish        | ${formData.leatherFinish || 'N/A'}
| Printing & Branding   | ${formData.printingBranding || 'N/A'}
+-----------------------+----------------------------------+
| Sizes Required        | ${formData.selectedSizes.length > 0 ? formData.selectedSizes.join(', ') : 'None'}
| Custom Size Notes     | ${formData.customSizeNotes || 'None'}
| Batch Quantity        | ${formData.quantityOption || 'N/A'}
| Target Custom Qty     | ${formData.customQuantity || 'N/A'}
+-----------------------+----------------------------------+
\`\`\`

*ADDITIONAL INSTRUCTIONS:*
${formData.additionalNotes || 'No additional instructions provided.'}

*ATTACHED ARTWORK FILES:* ${formData.files.length} File(s) selected in browser.`.trim();

    const encodedMessage = encodeURIComponent(tableMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodedMessage}`;

    window.location.href = whatsappUrl;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/90 backdrop-blur-xl border border-white/90 rounded-3xl p-10 text-center shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">Leather Inquiry Forwarded to WhatsApp!</h2>
        <p className="text-slate-600 max-w-lg mx-auto text-sm mb-6">
          Your full leather specification report has been compiled into a table format. If WhatsApp did not open automatically, please click below.
        </p>
        <button onClick={onBack} className="px-6 py-3 rounded-xl bg-slate-900 text-emerald-400 font-bold text-sm hover:bg-slate-800 transition">
          Return to Category Hub
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
          <Shield className="w-3.5 h-3.5" /> Direct WhatsApp Leather Order Builder
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Leather Wear & Outerwear Specifications</h2>
        <p className="text-xs text-slate-500">Configure hide selections, leather grain finishes, inner linings, embossing, and hardware options.</p>
      </div>

      {/* Client Information */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Client & Brand Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
            <input type="text" required value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} placeholder="Your full name" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Label Name *</label>
            <input type="text" required value={formData.companyName} onChange={e => setFormData({ ...formData, companyName: e.target.value })} placeholder="e.g. Auric Leatherworks" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="leather@brand.com" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number *</label>
            <input type="text" required value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} placeholder="+1 (555) 000-0000" className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" />
          </div>
        </div>
      </div>

      {/* 1. Product Details */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">1. Product Details <span className="text-xs text-slate-400 font-normal">(Select all that apply)</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {leatherProducts.map((prod, idx) => {
            const isSelected = formData.products.includes(prod);
            return (
              <button
                type="button"
                key={idx}
                onClick={() => handleProductToggle(prod)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                  isSelected ? 'bg-slate-900 text-emerald-400 border-slate-900 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                <span>{prod}</span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-slate-300'}`} />
              </button>
            );
          })}
        </div>
        <input type="text" placeholder="Write your own product name..." value={formData.customProductName} onChange={e => setFormData({ ...formData, customProductName: e.target.value })} className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500" />
      </div>

      {/* 2. Upload Your Design & 3. Color */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">2. Upload Your Design <span className="text-xs text-slate-400 font-normal">(PDF, JPG, PNG, AI, etc.)</span></h3>
          <div className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-5 text-center bg-white/40 transition relative cursor-pointer">
            <input type="file" multiple onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            <Upload className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
            <p className="text-xs text-slate-700 font-bold">Choose File or Drag & Drop Tech Pack</p>
            <p className="text-[10px] text-slate-400 mt-1">Upload your vector artwork or jacket measurements</p>
          </div>
          {formData.files.length > 0 && (
            <p className="text-xs text-emerald-600 font-bold mt-2">✓ {formData.files.length} File(s) Selected</p>
          )}
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">3. Color <span className="text-xs text-slate-400 font-normal">(Select leather colors)</span></h3>
          <div className="flex flex-wrap gap-2 items-center">
            {colorSwatches.map((color, idx) => {
              const isSelected = formData.selectedColor === color.name;
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setFormData({ ...formData, selectedColor: color.name })}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    isSelected ? 'ring-2 ring-emerald-600 scale-110 border-white' : 'border-slate-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              );
            })}
          </div>
          <input type="text" placeholder="Write custom color..." value={formData.customColor} onChange={e => setFormData({ ...formData, customColor: e.target.value })} className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500" />
        </div>
      </div>

      {/* 4. Technical Specifications */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">4. Technical Leather Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Material / Leather Hide</label>
            <select value={formData.material} onChange={e => setFormData({ ...formData, material: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500">
              <option value="">Select Material</option>
              {materials.map((m, idx) => <option key={idx} value={m}>{m}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Style / Model</label>
            <select value={formData.styleModel} onChange={e => setFormData({ ...formData, styleModel: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500">
              <option value="">Select Style / Model</option>
              {styleModels.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Leather Finish</label>
            <select value={formData.leatherFinish} onChange={e => setFormData({ ...formData, leatherFinish: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500">
              <option value="">Select Leather Finish</option>
              {leatherFinishes.map((lf, idx) => <option key={idx} value={lf}>{lf}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Printing & Branding</label>
            <select value={formData.printingBranding} onChange={e => setFormData({ ...formData, printingBranding: e.target.value })} className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-emerald-500">
              <option value="">Select Printing & Branding</option>
              {printingBrandings.map((pb, idx) => <option key={idx} value={pb}>{pb}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* 5. Size Range & 6. Quantity */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">5. Size Range <span className="text-xs text-slate-400 font-normal">(Select desired size details)</span></h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {sizeRanges.map((sz, idx) => {
              const isSelected = formData.selectedSizes.includes(sz);
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSizeToggle(sz)}
                  className={`py-2 rounded-xl text-xs font-black transition-all border ${
                    isSelected ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
          <input type="text" placeholder="Write custom size chart instructions..." value={formData.customSizeNotes} onChange={e => setFormData({ ...formData, customSizeNotes: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-emerald-500" />
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">6. Quantity <span className="text-xs text-slate-400 font-normal">(Select batch size options)</span></h3>
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
          <input type="text" placeholder="Write custom target quantity..." value={formData.customQuantity} onChange={e => setFormData({ ...formData, customQuantity: e.target.value })} className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-emerald-500" />
        </div>
      </div>

      {/* 7. Additional Notes */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">7. Additional Notes <span className="text-xs text-slate-400 font-normal">(Special Instructions)</span></h3>
        <textarea rows="3" value={formData.additionalNotes} onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })} placeholder="Write any special instructions or additional details here..." className="w-full bg-white/70 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-500"></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2">
        <MessageSquare className="w-5 h-5" /> Send Leatherwear Inquiry via WhatsApp (+92 370 9085311)
      </button>

    </form>
  );
}