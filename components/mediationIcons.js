export const HeadingIcon = ({ alt, src, isBigger }) => {
  return (
    <img alt={alt} src={src} style={
      isBigger ? {
        width: '64px',
        height: '64px',
        marginRight: '40px'
      } : {
        width: '32px',
        height: '32px',
        marginRight: '32px',
      }
    } />
  );
}

export const MediationHeadingIcon = () => {
  return (
    <HeadingIcon alt='mediation'
      src='/images/process0a-mediation-400x400.png'
      isBigger />
  );
}

export const ProcessHeadingIcon = () => {
  return (
    <HeadingIcon alt='process'
      src='/images/process0b-process-400x400.png' />
  );
}

export const AgreementHeadingIcon = () => {
  return (
    <HeadingIcon alt='agreement'
      src='/images/process0c-agreement-400x400.png' />
  );
}

export const ProcessElementIcon = ({ alt, src }) => {
  return (
    <img alt={alt} src={src} style={{
      width: '100%',
      height: '100%',
    }} />
  );
}

export const ImpartialProcessIcon = () => {
  return (
    <ProcessElementIcon alt='impartial' src='/images/process1-impartial-400x400.png' />
  );
}

export const VoluntaryProcessIcon = () => {
  return (
    <ProcessElementIcon alt='voluntary' src='/images/process2-voluntary-400x400.png' />
  );
}

export const ConfidentialityProcessIcon = () => {
  return (
    <ProcessElementIcon alt='confidentiality' src='/images/process3-confidentiality-400x400.png' />
  );
}

export const SelfDeterminationProcessIcon = () => {
  return (
    <ProcessElementIcon alt='self-determination' src='/images/process4-self-determination-400x400.png' />
  );
}