
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
function Harpsichord(context){
   this.context = context;
   this.envelope = new Envelope(this.context, 900, 400, 300, 500, 0.5);
}

Harpsichord.prototype.play = function(note) {
   this.carrier = this.context.createOscillator();
   this.modulator = this.context.createOscillator();
   this.modulatorGain = this.context.createGain();
   this.gain = this.context.createGain();

   this.gain.gain.value = 0.5;
   this.carrier.frequency.value = midi[note];
   this.modulator.frequency.value = (midi[note] * 10);
   this.modulatorGain.gain.value = 221;

   this.carrier.connect(this.envelope.node);
   this.modulator.connect(this.modulatorGain);
   this.modulatorGain.connect(this.carrier.frequency);
   this.envelope.connect(this.gain);
   this.gain.connect(this.context.destination);

   this.carrier.start(0);
   this.modulator.start(0);
   this.envelope.play(this);
};

Harpsichord.prototype.stop = function(){
   this.carrier.stop(0);
   this.modulator.stop(0);
   this.carrier.disconnect();
   this.modulator.disconnect();
   this.envelope.disconnect();
};
