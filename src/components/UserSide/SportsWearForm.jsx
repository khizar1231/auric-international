import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Upload, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export default function SportsWearForm({ onBack }) {
  const [formData, setFormData] = useState({
    // Client Details
    fullName: '',
    clubName: '',
    email: '',
    whatsapp: '',

    // 1. Product Details
    products: [],
    customProductName: '',

    // 2. Artwork Files & 3. Color
    selectedColor: '',
    customColor: '',
    files: [],

    // 4. Technical Specs
    fabricType: '',
    fabricGSM: '',
    neckStyle: '',
    fitStyle: '',
    sleeveStyle: '',
    printingDecoration: '',
    labelsBranding: '',

    // 5. Size Range & 6. Quantity
    selectedSizes: [],
    customSizeNotes: '',
    quantityOption: '',
    customQuantity: '',

    // 7. Additional Notes
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Exact Options Mapped from Uploaded Images
  const sportsProducts = [
    'Gloves', 'Warm-Up Jacket', 'Tank top', 'Compression Wear', 'T-Shirt', 'Polo shirt',
    'TROUSERS HOODIES', 'Tracksuit.', 'Hoodie', 'JERSY SOCKS SHORTS', 'Baseball jersy',
    'scoocer jersy', 'Basketball jersy', 'Hockey jersy shorts'
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
    'Performance Fabrics', 'Polyester Fleece / Terry', 'Polyester Interlock',
    'Dry Fit Lycra / Spandex', 'Bird Eye Mesh', '3-Tack Mesh', 'Scuba',
    'Speedo', 'Trinda', 'Micro Stretch', 'Quick Dry Fabric'
  ];

  const fabricGSMs = [
    '140 GSM', '160 GSM', '180 GSM', '200 GSM', '220 GSM',
    '250 GSM', '280 GSM', '300 GSM', '320 GSM', '350 GSM'
  ];

  const neckStyles = [
    'Round Neck', 'V-Neck', 'Polo Collar', 'V-Neck Polo',
    'Hoodie', 'V-Neck Hoodie', 'Quarter Zip', 'Full Zip'
  ];

  const fitStyles = [
    'Athletic Fit', 'Regular Fit', 'Slim Fit', 'Relaxed Fit',
    'Compression Fit', 'Oversized Fit', "Women's Fit", 'Kids Fit'
  ];

  const sleeveStyles = [
    'Sleeveless', 'Half Sleeve', 'Full Sleeve', 'Raglan Sleeve', 'American Sleeve'
  ];

  const printingDecorations = [
    'Sublimation Printing Recommended', 'Screen Printing', 'DTF Heat Transfer',
    'Heat Press', 'Reflective Print', 'Glow Print', 'Puff Print',
    'Embroidery', 'Flat Embroidery', '3D Puff Embroidery'
  ];

  const labelsBrandings = [
    'Neck Woven Label', 'Heat Transfer Label', 'Size Label', 'Private Label'
  ];

  const sizeRanges = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];
  const quantityOptions = ['Sample', '10 UNITS', '20 UNITS', '30 UNITS', '50 UNITS', '100 UNITS', '100+ Pieces'];

  // Handler functions
  const handleProductToggle = (prod) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(prod)
        ? prev.products.filter(p => p !== prod)
        : [...prev.products, prod]
    }));
    if (errors.products) setErrors(prev => ({ ...prev, products: null }));
  };

  const handleSizeToggle = (sz) => {
    setFormData(prev => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(sz)
        ? prev.selectedSizes.filter(s => s !== sz)
        : [...prev.selectedSizes, sz]
    }));
    if (errors.selectedSizes) setErrors(prev => ({ ...prev, selectedSizes: null }));
  };

  const handleFileUpload = (e) => {
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...Array.from(e.target.files)]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Client & Team Info
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.clubName.trim()) newErrors.clubName = 'Club / Brand / Academy Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp Number is required.';

    // 1. Product Details
    if (formData.products.length === 0 && !formData.customProductName.trim()) {
      newErrors.products = 'Please select at least one product or enter a custom product name.';
    }

    // 3. Color Selection
    if (!formData.selectedColor && !formData.customColor.trim()) {
      newErrors.selectedColor = 'Please select a color swatch or write a custom color.';
    }

    // 4. Technical Specs
    if (!formData.fabricType) newErrors.fabricType = 'Please select a fabric type.';
    if (!formData.fabricGSM) newErrors.fabricGSM = 'Please select a fabric GSM.';
    if (!formData.neckStyle) newErrors.neckStyle = 'Please select a neck style.';
    if (!formData.fitStyle) newErrors.fitStyle = 'Please select a fit style.';
    if (!formData.sleeveStyle) newErrors.sleeveStyle = 'Please select a sleeve style.';
    if (!formData.printingDecoration) newErrors.printingDecoration = 'Please select a printing technique.';
    if (!formData.labelsBranding) newErrors.labelsBranding = 'Please select a label option.';

    // 5. Sizes & 6. Quantity
    if (formData.selectedSizes.length === 0) newErrors.selectedSizes = 'Please select at least one size.';
    if (!formData.quantityOption && !formData.customQuantity.trim()) {
      newErrors.quantityOption = 'Please select a batch quantity option or enter a custom quantity.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetWhatsAppNumber = '923709085311';

    const message = `
*NEW SPORTSWEAR SPECIFICATION INQUIRY*
------------------------------------
*CLIENT & BRAND INFO*
• *Full Name:* ${formData.fullName}
• *Club/Brand:* ${formData.clubName}
• *Email:* ${formData.email}
• *WhatsApp No:* ${formData.whatsapp}

*1. PRODUCT SELECTION*
• *Items:* ${formData.products.length > 0 ? formData.products.join(', ') : 'Custom item'}
• *Custom Item Name:* ${formData.customProductName || 'None'}

*2. COLOR & ARTWORK*
• *Color Selected:* ${formData.selectedColor || 'Custom'} ${formData.customColor ? `(${formData.customColor})` : ''}
• *Artwork Files:* ${formData.files.length > 0 ? `${formData.files.length} file(s) attached.` : 'No files attached.'}

*3. TECHNICAL PERFORMANCE SPECS*
• *Fabric Type:* ${formData.fabricType}
• *Fabric GSM:* ${formData.fabricGSM}
• *Neck Style:* ${formData.neckStyle}
• *Fit Style:* ${formData.fitStyle}
• *Sleeve Style:* ${formData.sleeveStyle}
• *Printing/Decoration:* ${formData.printingDecoration}
• *Labels & Branding:* ${formData.labelsBranding}

*4. SIZES & QUANTITY*
• *Selected Sizes:* ${formData.selectedSizes.join(', ')}
• *Size Chart Instructions:* ${formData.customSizeNotes || 'None'}
• *Batch Quantity:* ${formData.quantityOption || 'Custom'}
• *Custom Target Qty:* ${formData.customQuantity || 'N/A'}

*5. ADDITIONAL SPECIAL INSTRUCTIONS*
${formData.additionalNotes || 'No additional instructions provided.'}
------------------------------------
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/90 backdrop-blur-xl border border-white/90 rounded-3xl p-10 text-center shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">Sportswear Inquiry Sent to WhatsApp!</h2>
        <p className="text-slate-600 max-w-lg mx-auto text-sm mb-6">
          Your full performance specification has been generated. If WhatsApp did not launch automatically, please click below.
        </p>
        <button onClick={onBack} className="px-6 py-3 rounded-xl bg-slate-900 text-blue-400 font-bold text-sm hover:bg-slate-800 transition">
          Return to Category Hub
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200/80 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
          <Activity className="w-3.5 h-3.5" /> Get your Free Quote
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Sportswear & Team Kit Specifications</h2>
        <p className="text-xs text-slate-500">Configure your performance gear, sublimation graphics, collar cuts, and team roster quantities.</p>
        {Object.keys(errors).length > 0 && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-600 font-bold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Please complete all highlighted required fields before submitting.</span>
          </div>
        )}
      </div>

      {/* Client Details */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Client & Team Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={e => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors(prev => ({ ...prev, fullName: null }));
              }}
              placeholder="Contact person name"
              className={`w-full bg-white/70 border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.fullName && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Club / Brand / Academy Name *</label>
            <input
              type="text"
              value={formData.clubName}
              onChange={e => {
                setFormData({ ...formData, clubName: e.target.value });
                if (errors.clubName) setErrors(prev => ({ ...prev, clubName: null }));
              }}
              placeholder="e.g. Auric Athletic FC"
              className={`w-full bg-white/70 border ${errors.clubName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.clubName && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.clubName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors(prev => ({ ...prev, email: null }));
              }}
              placeholder="sports@domain.com"
              className={`w-full bg-white/70 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number *</label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={e => {
                setFormData({ ...formData, whatsapp: e.target.value });
                if (errors.whatsapp) setErrors(prev => ({ ...prev, whatsapp: null }));
              }}
              placeholder="+1 (555) 000-0000"
              className={`w-full bg-white/70 border ${errors.whatsapp ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500`}
            />
            {errors.whatsapp && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.whatsapp}</p>}
          </div>
        </div>
      </div>

      {/* 1. Product Details */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">
          1. Product Details * <span className="text-xs text-slate-400 font-normal">(Select all that apply)</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {sportsProducts.map((prod, idx) => {
            const isSelected = formData.products.includes(prod);
            return (
              <button
                type="button"
                key={idx}
                onClick={() => handleProductToggle(prod)}
                className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                  isSelected ? 'bg-slate-900 text-blue-400 border-slate-900 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                <span>{prod}</span>
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-400' : 'bg-slate-300'}`} />
              </button>
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Or write custom product name..."
          value={formData.customProductName}
          onChange={e => {
            setFormData({ ...formData, customProductName: e.target.value });
            if (errors.products) setErrors(prev => ({ ...prev, products: null }));
          }}
          className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500"
        />
        {errors.products && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.products}</p>}
      </div>

      {/* 2. Upload Your Design & 3. Color */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">
            2. Upload Your Design <span className="text-xs text-slate-400 font-normal">(Optional - PDF, JPG, PNG, AI, etc.)</span>
          </h3>
          <div className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-5 text-center bg-white/40 transition relative cursor-pointer">
            <input type="file" multiple onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            <Upload className="w-6 h-6 text-blue-600 mx-auto mb-1" />
            <p className="text-xs text-slate-700 font-bold">Choose File or Drag & Drop Design Mockup</p>
            <p className="text-[10px] text-slate-400 mt-1">Upload vector/tech pack to get direct factory quote</p>
          </div>
          {formData.files.length > 0 && (
            <p className="text-xs text-blue-600 font-bold mt-2">✓ {formData.files.length} File(s) Selected</p>
          )}
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">
            3. Color * <span className="text-xs text-slate-400 font-normal">(Select swatch or write custom color)</span>
          </h3>
          <div className="flex flex-wrap gap-2 items-center">
            {colorSwatches.map((color, idx) => {
              const isSelected = formData.selectedColor === color.name;
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => {
                    setFormData({ ...formData, selectedColor: color.name });
                    if (errors.selectedColor) setErrors(prev => ({ ...prev, selectedColor: null }));
                  }}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    isSelected ? 'ring-2 ring-blue-600 scale-110 border-white' : 'border-slate-300 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              );
            })}
          </div>
          <input
            type="text"
            placeholder="Or write custom color..."
            value={formData.customColor}
            onChange={e => {
              setFormData({ ...formData, customColor: e.target.value });
              if (errors.selectedColor) setErrors(prev => ({ ...prev, selectedColor: null }));
            }}
            className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-blue-500"
          />
          {errors.selectedColor && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.selectedColor}</p>}
        </div>
      </div>

      {/* Technical Performance Specs */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">4. Technical Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fabric Type *</label>
            <select
              value={formData.fabricType}
              onChange={e => {
                setFormData({ ...formData, fabricType: e.target.value });
                if (errors.fabricType) setErrors(prev => ({ ...prev, fabricType: null }));
              }}
              className={`w-full bg-white/70 border ${errors.fabricType ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Fabric Type</option>
              {fabricTypes.map((ft, idx) => <option key={idx} value={ft}>{ft}</option>)}
            </select>
            {errors.fabricType && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fabricType}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fabric GSM *</label>
            <select
              value={formData.fabricGSM}
              onChange={e => {
                setFormData({ ...formData, fabricGSM: e.target.value });
                if (errors.fabricGSM) setErrors(prev => ({ ...prev, fabricGSM: null }));
              }}
              className={`w-full bg-white/70 border ${errors.fabricGSM ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Fabric GSM</option>
              {fabricGSMs.map((g, idx) => <option key={idx} value={g}>{g}</option>)}
            </select>
            {errors.fabricGSM && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fabricGSM}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Neck Style *</label>
            <select
              value={formData.neckStyle}
              onChange={e => {
                setFormData({ ...formData, neckStyle: e.target.value });
                if (errors.neckStyle) setErrors(prev => ({ ...prev, neckStyle: null }));
              }}
              className={`w-full bg-white/70 border ${errors.neckStyle ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Neck Style</option>
              {neckStyles.map((nk, idx) => <option key={idx} value={nk}>{nk}</option>)}
            </select>
            {errors.neckStyle && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.neckStyle}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fit Style *</label>
            <select
              value={formData.fitStyle}
              onChange={e => {
                setFormData({ ...formData, fitStyle: e.target.value });
                if (errors.fitStyle) setErrors(prev => ({ ...prev, fitStyle: null }));
              }}
              className={`w-full bg-white/70 border ${errors.fitStyle ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Fit Style</option>
              {fitStyles.map((fit, idx) => <option key={idx} value={fit}>{fit}</option>)}
            </select>
            {errors.fitStyle && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fitStyle}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Sleeve Style *</label>
            <select
              value={formData.sleeveStyle}
              onChange={e => {
                setFormData({ ...formData, sleeveStyle: e.target.value });
                if (errors.sleeveStyle) setErrors(prev => ({ ...prev, sleeveStyle: null }));
              }}
              className={`w-full bg-white/70 border ${errors.sleeveStyle ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Sleeve Style</option>
              {sleeveStyles.map((slv, idx) => <option key={idx} value={slv}>{slv}</option>)}
            </select>
            {errors.sleeveStyle && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.sleeveStyle}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Printing & Decoration *</label>
            <select
              value={formData.printingDecoration}
              onChange={e => {
                setFormData({ ...formData, printingDecoration: e.target.value });
                if (errors.printingDecoration) setErrors(prev => ({ ...prev, printingDecoration: null }));
              }}
              className={`w-full bg-white/70 border ${errors.printingDecoration ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Printing & Decoration</option>
              {printingDecorations.map((pd, idx) => <option key={idx} value={pd}>{pd}</option>)}
            </select>
            {errors.printingDecoration && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.printingDecoration}</p>}
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Labels & Branding *</label>
            <select
              value={formData.labelsBranding}
              onChange={e => {
                setFormData({ ...formData, labelsBranding: e.target.value });
                if (errors.labelsBranding) setErrors(prev => ({ ...prev, labelsBranding: null }));
              }}
              className={`w-full bg-white/70 border ${errors.labelsBranding ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500`}
            >
              <option value="">Select Labels & Branding</option>
              {labelsBrandings.map((lbl, idx) => <option key={idx} value={lbl}>{lbl}</option>)}
            </select>
            {errors.labelsBranding && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.labelsBranding}</p>}
          </div>
        </div>
      </div>

      {/* 5. Size Range & 6. Quantity */}
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">
            5. Size Range * <span className="text-xs text-slate-400 font-normal">(Select desired size details)</span>
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {sizeRanges.map((sz, idx) => {
              const isSelected = formData.selectedSizes.includes(sz);
              return (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSizeToggle(sz)}
                  className={`py-2 rounded-xl text-xs font-black transition-all border ${
                    isSelected ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
          {errors.selectedSizes && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.selectedSizes}</p>}

          <input
            type="text"
            placeholder="Write custom size chart instructions (Optional)..."
            value={formData.customSizeNotes}
            onChange={e => setFormData({ ...formData, customSizeNotes: e.target.value })}
            className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">
            6. Quantity * <span className="text-xs text-slate-400 font-normal">(Select batch size option or specify target quantity)</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quantityOptions.map((qty, idx) => (
              <button
                type="button"
                key={idx}
                onClick={() => {
                  setFormData({ ...formData, quantityOption: qty });
                  if (errors.quantityOption) setErrors(prev => ({ ...prev, quantityOption: null }));
                }}
                className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                  formData.quantityOption === qty ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white/70 text-slate-700 border-slate-200 hover:border-slate-400'
                }`}
              >
                {qty}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Or write custom target quantity..."
            value={formData.customQuantity}
            onChange={e => {
              setFormData({ ...formData, customQuantity: e.target.value });
              if (errors.quantityOption) setErrors(prev => ({ ...prev, quantityOption: null }));
            }}
            className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-blue-500"
          />
          {errors.quantityOption && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.quantityOption}</p>}
        </div>
      </div>

      {/* 7. Additional Notes */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">
          7. Additional Notes <span className="text-xs text-slate-400 font-normal">(Optional Special Instructions)</span>
        </h3>
        <textarea
          rows="3"
          value={formData.additionalNotes}
          onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })}
          placeholder="Write any special instructions or additional details here..."
          className="w-full bg-white/70 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
        <MessageSquare className="w-5 h-5" /> Send Sportswear Inquiry via WhatsApp (+92 370 9085311)
      </button>

    </form>
  );
}