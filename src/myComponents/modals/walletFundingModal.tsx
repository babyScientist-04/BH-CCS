import React, { useState } from 'react';
import { X } from 'lucide-react';
type FundWalletModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onProceed: (amount: number) => void;
    walletName: string; // e.g., "Blackhorse wallet"
  };

const walletFundingModal:  React.FC<FundWalletModalProps> = ({ 
    isOpen, 
    onClose, 
    onProceed, 
    walletName 
  }) => {
    const [amount, setAmount] = useState<string>("0.00");
  
    if (!isOpen) return null;
  
    return (
      // Backdrop
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        
        {/* Modal Container */}
        <div className="bg-white w-[500px] rounded-sm p-8 flex flex-col min-h-[500px]">
          
          {/* Header */}
          <header className="mb-auto flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-medium text-slate-900">Fund Wallet</h2>
              <p className="text-sm text-slate-400 mt-1">
                Top up your teams {walletName}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="shrink-0 rounded-sm p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </header>
  
          {/* Amount Input Section */}
          <main className="flex flex-col items-center justify-center flex-1">
            <label className="text-slate-800 font-medium mb-4">Enter amount</label>
            <div className="relative">
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-6xl font-bold text-slate-300 text-center outline-none w-full bg-transparent appearance-none"
                placeholder="0.00"
              />
            </div>
          </main>
  
          {/* Footer Button */}
          <footer className="mt-auto">
            <button 
              onClick={() => onProceed(parseFloat(amount))}
              className="w-full bg-[#0F233C] text-white py-4 font-medium transition-hover hover:bg-[#1a314d]"
            >
              Proceed to payment
            </button>
          </footer>
  
        </div>
      </div>
    );
  };

export default walletFundingModal