import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Upload, Send, CheckCircle2, Sparkles, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';

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

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Cloudinary Configurations
  const CLOUD_NAME = 'dnwoc6twn';
  const UPLOAD_PRESET = 'casualwear_preset';

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

  const handleProductToggle = (prod) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(prod)
        ? prev.products.filter(p => p !== prod)
        : [...prev.products, prod]
    }));
    if (errors.products) setErrors(prev => ({ ...prev, products: null }));
  };

  const handleSizeToggle = (size) => {
    setFormData(prev => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(size)
        ? prev.selectedSizes.filter(s => s !== size)
        : [...prev.selectedSizes, size]
    }));
    if (errors.selectedSizes) setErrors(prev => ({ ...prev, selectedSizes: null }));
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...uploadedFiles] }));
  };

  // Upload files to Cloudinary directly from client side
  const uploadFilesToCloudinary = async (files) => {
    const fileUrls = [];

    for (const file of files) {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', UPLOAD_PRESET);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
          {
            method: 'POST',
            body: data,
          }
        );
        const result = await response.json();
        if (result.secure_url) {
          fileUrls.push(result.secure_url);
        }
      } catch (err) {
        console.error('Cloudinary Upload Failed:', err);
      }
    }

    return fileUrls;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.brandName.trim()) newErrors.brandName = 'Brand / Company Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp Number is required.';

    if (formData.products.length === 0) newErrors.products = 'Please select at least one product category.';

    if (!formData.selectedColor && !formData.customColor.trim()) {
      newErrors.selectedColor = 'Please choose a color swatch or specify a custom color.';
    }

    if (!formData.fabricType) newErrors.fabricType = 'Please select a fabric type.';
    if (!formData.fabricGSM) {
      newErrors.fabricGSM = 'Please select a fabric GSM.';
    } else if (formData.fabricGSM === 'Custom GSM:' && !formData.customGSM.trim()) {
      newErrors.customGSM = 'Please specify your custom GSM.';
    }

    if (!formData.vintageEffect) {
      newErrors.vintageEffect = 'Please select a vintage effect / wash option.';
    } else if (formData.vintageEffect === 'Custom Vintage Effect:' && !formData.customVintage.trim()) {
      newErrors.customVintage = 'Please specify your custom vintage effect.';
    }

    if (!formData.fitStyle) {
      newErrors.fitStyle = 'Please select a fit style.';
    } else if (formData.fitStyle === 'Custom Measurement:' && !formData.customFit.trim()) {
      newErrors.customFit = 'Please specify your custom measurement.';
    }

    if (!formData.printingTechnique) newErrors.printingTechnique = 'Please select a printing technique.';
    if (!formData.rhinestones) {
      newErrors.rhinestones = 'Please select a rhinestone option.';
    } else if (formData.rhinestones === 'Custom Rhinestone Requirement:' && !formData.customRhinestones.trim()) {
      newErrors.customRhinestones = 'Please specify rhinestone details.';
    }

    if (!formData.labelsBranding) {
      newErrors.labelsBranding = 'Please select a label option.';
    } else if (formData.labelsBranding === 'Custom Label Requirement:' && !formData.customLabels.trim()) {
      newErrors.customLabels = 'Please specify label details.';
    }

    if (formData.selectedSizes.length === 0) newErrors.selectedSizes = 'Please select at least one size.';
    if (!formData.quantityOption && !formData.customQuantity.trim()) {
      newErrors.quantityOption = 'Please select a batch quantity or specify custom quantity.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setUploading(true);

    // Upload files to Cloudinary first
    let uploadedUrls = [];
    if (formData.files.length > 0) {
      uploadedUrls = await uploadFilesToCloudinary(formData.files);
    }

    const targetWhatsAppNumber = '923709085311';

    const message = `
*NEW CASUALWEAR SPECIFICATION INQUIRY*
------------------------------------
*1. CONTACT INFORMATION*
• *Full Name:* ${formData.fullName}
• *Brand Name:* ${formData.brandName}
• *Email:* ${formData.email}
• *WhatsApp No:* ${formData.whatsapp}

*2. PRODUCT DETAILS*
• *Items Selected:* ${formData.products.join(', ')}

*3. COLOR PREFERENCE*
• *Color Selected:* ${formData.selectedColor || 'Custom'} ${formData.customColor ? `(${formData.customColor})` : ''}

*4. FABRIC & FIT SPECIFICATIONS*
• *Fabric Type:* ${formData.fabricType}
• *Fabric GSM:* ${formData.fabricGSM === 'Custom GSM:' ? `Custom (${formData.customGSM})` : formData.fabricGSM}
• *Vintage Wash:* ${formData.vintageEffect === 'Custom Vintage Effect:' ? `Custom (${formData.customVintage})` : formData.vintageEffect}
• *Fit Style:* ${formData.fitStyle === 'Custom Measurement:' ? `Custom (${formData.customFit})` : formData.fitStyle}

*5. PRINTING & BRANDING*
• *Printing Tech:* ${formData.printingTechnique}
• *Rhinestones:* ${formData.rhinestones === 'Custom Rhinestone Requirement:' ? `Custom (${formData.customRhinestones})` : formData.rhinestones}
• *Labels & Branding:* ${formData.labelsBranding === 'Custom Label Requirement:' ? `Custom (${formData.customLabels})` : formData.labelsBranding}

*6. SIZES & QUANTITIES*
• *Sizes Required:* ${formData.selectedSizes.join(', ')}
• *Size Chart Notes:* ${formData.customSizeNotes || 'None'}
• *Quantity Option:* ${formData.quantityOption || 'Custom'}
• *Custom Quantity:* ${formData.customQuantity || 'N/A'}

*7. ADDITIONAL INSTRUCTIONS*
${formData.additionalNotes || 'No additional notes provided.'}
------------------------------------
*ATTACHED ARTWORK / TECH PACKS:*
${uploadedUrls.length > 0 ? uploadedUrls.join('\n') : 'No files attached.'}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;

    setUploading(false);
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/90 backdrop-blur-xl border border-white/90 rounded-3xl p-10 text-center shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-amber-500 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-slate-900 mb-2">Inquiry Forwarded to WhatsApp!</h2>
        <p className="text-slate-600 max-w-lg mx-auto text-sm mb-6">
          Your full specification and uploaded file links have been compiled. If WhatsApp did not open automatically, please click below.
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
        <p className="text-xs text-slate-500">Fill out garment details below to generate a production quote directly via WhatsApp.</p>
        {Object.keys(errors).length > 0 && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-600 font-bold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Please complete all highlighted fields before submitting.</span>
          </div>
        )}
      </div>

      {/* User Information */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">Client & Brand Information</h3>
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
              placeholder="Your full name"
              className={`w-full bg-white/70 border ${errors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500`}
            />
            {errors.fullName && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Brand / Company Name *</label>
            <input
              type="text"
              value={formData.brandName}
              onChange={e => {
                setFormData({ ...formData, brandName: e.target.value });
                if (errors.brandName) setErrors(prev => ({ ...prev, brandName: null }));
              }}
              placeholder="Your clothing label"
              className={`w-full bg-white/70 border ${errors.brandName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500`}
            />
            {errors.brandName && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.brandName}</p>}
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
              placeholder="name@brand.com"
              className={`w-full bg-white/70 border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500`}
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
              className={`w-full bg-white/70 border ${errors.whatsapp ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500`}
            />
            {errors.whatsapp && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.whatsapp}</p>}
          </div>
        </div>
      </div>

      {/* 1. Product Details Grid */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-1">
          1. Product Details * <span className="text-xs text-slate-400 font-normal">(Select all that apply)</span>
        </h3>
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
        {errors.products && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.products}</p>}
      </div>

      {/* 2. Color Selection */}
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide mb-2">
          2. Color * <span className="text-xs text-slate-400 font-normal">(Select swatch or write custom color)</span>
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
                  isSelected ? 'ring-2 ring-amber-500 scale-110 border-white' : 'border-slate-300 hover:scale-105'
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
          className="mt-3 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
        />
        {errors.selectedColor && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.selectedColor}</p>}
      </div>

      {/* 3. Fabric & Material Specifications */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">3. Fabric Specifications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fabric Type *</label>
            <select
              value={formData.fabricType}
              onChange={e => {
                setFormData({ ...formData, fabricType: e.target.value });
                if (errors.fabricType) setErrors(prev => ({ ...prev, fabricType: null }));
              }}
              className={`w-full bg-white/70 border ${errors.fabricType ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Fabric Type</option>
              {fabricTypes.map((f, idx) => <option key={idx} value={f}>{f}</option>)}
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
              className={`w-full bg-white/70 border ${errors.fabricGSM ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Fabric GSM</option>
              {fabricGSMs.map((g, idx) => <option key={idx} value={g}>{g}</option>)}
            </select>
            {errors.fabricGSM && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fabricGSM}</p>}
            {formData.fabricGSM === 'Custom GSM:' && (
              <div>
                <input
                  type="text"
                  placeholder="Specify Custom GSM..."
                  value={formData.customGSM}
                  onChange={e => {
                    setFormData({ ...formData, customGSM: e.target.value });
                    if (errors.customGSM) setErrors(prev => ({ ...prev, customGSM: null }));
                  }}
                  className={`mt-2 w-full bg-white/70 border ${errors.customGSM ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500`}
                />
                {errors.customGSM && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.customGSM}</p>}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Vintage Effects / Washes *</label>
            <select
              value={formData.vintageEffect}
              onChange={e => {
                setFormData({ ...formData, vintageEffect: e.target.value });
                if (errors.vintageEffect) setErrors(prev => ({ ...prev, vintageEffect: null }));
              }}
              className={`w-full bg-white/70 border ${errors.vintageEffect ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Vintage Effects</option>
              {vintageEffects.map((v, idx) => <option key={idx} value={v}>{v}</option>)}
            </select>
            {errors.vintageEffect && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.vintageEffect}</p>}
            {formData.vintageEffect === 'Custom Vintage Effect:' && (
              <div>
                <input
                  type="text"
                  placeholder="Specify Vintage Effect..."
                  value={formData.customVintage}
                  onChange={e => {
                    setFormData({ ...formData, customVintage: e.target.value });
                    if (errors.customVintage) setErrors(prev => ({ ...prev, customVintage: null }));
                  }}
                  className={`mt-2 w-full bg-white/70 border ${errors.customVintage ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500`}
                />
                {errors.customVintage && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.customVintage}</p>}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Fit Style *</label>
            <select
              value={formData.fitStyle}
              onChange={e => {
                setFormData({ ...formData, fitStyle: e.target.value });
                if (errors.fitStyle) setErrors(prev => ({ ...prev, fitStyle: null }));
              }}
              className={`w-full bg-white/70 border ${errors.fitStyle ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Fit Style</option>
              {fitStyles.map((fit, idx) => <option key={idx} value={fit}>{fit}</option>)}
            </select>
            {errors.fitStyle && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.fitStyle}</p>}
            {formData.fitStyle === 'Custom Measurement:' && (
              <div>
                <input
                  type="text"
                  placeholder="Specify Custom Measurement..."
                  value={formData.customFit}
                  onChange={e => {
                    setFormData({ ...formData, customFit: e.target.value });
                    if (errors.customFit) setErrors(prev => ({ ...prev, customFit: null }));
                  }}
                  className={`mt-2 w-full bg-white/70 border ${errors.customFit ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500`}
                />
                {errors.customFit && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.customFit}</p>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Printing, Rhinestones & Branding */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">4. Customization & Branding</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Printing Technique *</label>
            <select
              value={formData.printingTechnique}
              onChange={e => {
                setFormData({ ...formData, printingTechnique: e.target.value });
                if (errors.printingTechnique) setErrors(prev => ({ ...prev, printingTechnique: null }));
              }}
              className={`w-full bg-white/70 border ${errors.printingTechnique ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Printing Technique</option>
              {printingTechniques.map((pt, idx) => <option key={idx} value={pt}>{pt}</option>)}
            </select>
            {errors.printingTechnique && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.printingTechnique}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Rhinestones *</label>
            <select
              value={formData.rhinestones}
              onChange={e => {
                setFormData({ ...formData, rhinestones: e.target.value });
                if (errors.rhinestones) setErrors(prev => ({ ...prev, rhinestones: null }));
              }}
              className={`w-full bg-white/70 border ${errors.rhinestones ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Rhinestones</option>
              {rhinestoneOptions.map((r, idx) => <option key={idx} value={r}>{r}</option>)}
            </select>
            {errors.rhinestones && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.rhinestones}</p>}
            {formData.rhinestones === 'Custom Rhinestone Requirement:' && (
              <div>
                <input
                  type="text"
                  placeholder="Specify Rhinestone Details..."
                  value={formData.customRhinestones}
                  onChange={e => {
                    setFormData({ ...formData, customRhinestones: e.target.value });
                    if (errors.customRhinestones) setErrors(prev => ({ ...prev, customRhinestones: null }));
                  }}
                  className={`mt-2 w-full bg-white/70 border ${errors.customRhinestones ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500`}
                />
                {errors.customRhinestones && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.customRhinestones}</p>}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Labels & Branding *</label>
            <select
              value={formData.labelsBranding}
              onChange={e => {
                setFormData({ ...formData, labelsBranding: e.target.value });
                if (errors.labelsBranding) setErrors(prev => ({ ...prev, labelsBranding: null }));
              }}
              className={`w-full bg-white/70 border ${errors.labelsBranding ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-amber-500`}
            >
              <option value="">Select Labels & Branding</option>
              {labelOptions.map((lbl, idx) => <option key={idx} value={lbl}>{lbl}</option>)}
            </select>
            {errors.labelsBranding && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.labelsBranding}</p>}
            {formData.labelsBranding === 'Custom Label Requirement:' && (
              <div>
                <input
                  type="text"
                  placeholder="Specify Label Details..."
                  value={formData.customLabels}
                  onChange={e => {
                    setFormData({ ...formData, customLabels: e.target.value });
                    if (errors.customLabels) setErrors(prev => ({ ...prev, customLabels: null }));
                  }}
                  className={`mt-2 w-full bg-white/70 border ${errors.customLabels ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500`}
                />
                {errors.customLabels && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.customLabels}</p>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Size Range & Quantities */}
      <div className="space-y-4">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wide">5. Size Range & Quantity</h3>
        
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Select Sizes Required *</label>
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
          {errors.selectedSizes && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.selectedSizes}</p>}

          <label className="block text-xs font-bold text-slate-700 uppercase mt-3 mb-1">
            Custom Size Chart Instructions <span className="text-xs text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="Write custom size instructions if applicable..."
            value={formData.customSizeNotes}
            onChange={e => setFormData({ ...formData, customSizeNotes: e.target.value })}
            className="w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Batch Quantity *</label>
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
            className="mt-2 w-full bg-white/70 border border-slate-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-amber-500"
          />
          {errors.quantityOption && <p className="text-red-500 text-[11px] font-bold mt-1">{errors.quantityOption}</p>}
        </div>
      </div>

      {/* 6. Additional Notes & File Attachments */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Additional Notes / Special Instructions <span className="text-xs text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows="3"
            value={formData.additionalNotes}
            onChange={e => setFormData({ ...formData, additionalNotes: e.target.value })}
            placeholder="Write any special instructions or additional details here..."
            className="w-full bg-white/70 border border-slate-200 rounded-xl p-3 text-xs focus:outline-none focus:border-amber-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Attach Artwork / Tech Pack (Vector / PDF / Image) <span className="text-xs text-slate-400 font-normal">(Optional)</span>
          </label>
          <div className="border-2 border-dashed border-slate-300 hover:border-amber-500 bg-white/40 rounded-2xl p-4 text-center transition relative cursor-pointer">
            <input type="file" multiple onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            <Upload className="w-5 h-5 text-amber-500 mx-auto mb-1" />
            <p className="text-xs text-slate-600 font-medium">
              {formData.files.length > 0
                ? `${formData.files.length} file(s) attached`
                : 'Attach files (AI, PSD, PDF, PNG, JPG)'}
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        disabled={uploading}
        className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-extrabold text-base shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
      >
        {uploading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Uploading Artwork & Preparing Order...
          </>
        ) : (
          <>
            <MessageSquare className="w-5 h-5" /> Send Order Inquiry via WhatsApp (+92 370 9085311)
          </>
        )}
      </button>
    </form>
  );
}