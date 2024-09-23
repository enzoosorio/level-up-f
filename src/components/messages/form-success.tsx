

interface FormSuccessProps { 
    message? : string
}

export const FormSuccess = ({ message } : FormSuccessProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-emerald-500/90 p-2 rounded-md mt-2 flex items-center justify-center gap-x-2 w-full">
      <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/></svg>
      <p className="text-xs text-center text-white">{message}</p>
    </div>
  );
};