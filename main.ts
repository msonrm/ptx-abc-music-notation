/**
 * table of note2key
 */
enum Key {
    //% block="C"
    C = 1,
    //% block="G"
    G = 2,
    //% block="D"
    D = 3,
    //% block="A"
    A = 4,
    //% block="E"
    E = 5,
    //% block="B"
    B = 6,
    //% block="F#"
    Fsharp = 7,
    //% block="C#"
    Csharp = 8,
    //% block="F"
    F = 9,
    //% block="Bb"
    Bflat = 10,
    //% block="Eb"
    Eflat = 11,
    //% block="Ab"
    Aflat = 12,
    //% block="Db"
    Dflat = 13,
    //% block="Gb"
    Gflat = 14,
    //% block="Cb"
    Cflat = 15,
    //% block="Am"
    Am = 1,
    //% block="Em"
    Em = 2,
    //% block="Bm"
    Bm = 3,
    //% block="F#m"
    Fsharpm = 4,
    //% block="C#m"
    Csharpm = 5,
    //% block="G#m"
    Gsharpm = 6,
    //% block="D#m"
    Dsharpm = 7,
    //% block="A#m"
    Asharpm = 8,
    //% block="Dm"
    Dm = 9,
    //% block="Gm"
    Gm = 10,
    //% block="Cm"
    Cm = 11,
    //% block="Fm"
    Fm = 12,
    //% block="Bbm"
    Bflatm = 13,
    //% block="Ebm"
    Eflatm = 14,
    //% block="Abm"
    Afratm = 15
}

/**
 * table of note2meter
 */
enum note2meter {
    //% block="C"
    C = 8,
    //% block="CI"
    CI = 8,
    //% block="2/2"
    _2_2 = 8,
    //% block="2/4"
    _2_4 = 16,
    //% block="2/8"
    _2_8 = 16,
    //% block="3/2"
    _3_2 = 8,
    //% block="3/4"
    _3_4 = 8,
    //% block="3/8"
    _3_8 = 16,
    //% block="4/4"
    _4_4 = 8,
    //% block="4/8"
    _4_8 = 16,
    //% block="6/4"
    _6_4 = 8,
    //% block="6/8"
    _6_8 = 8,
    //% block="9/8"
    _9_8 = 8,
    //% block="12/8"
    _12_8 = 8,
}

/**
 * table of note2unitNoteLength
 */
enum note2UNL {
    //% block="1/4"
    _1_4 = 4,
    //% block="1/8"
    _1_8 = 8,
    //% block="1/16"
    _1_16 = 16,
    //% block="1/32"
    _1_32 = 32

}


/**
 * noteNo2freq
 */
const noteNo2freq: number[] = [0, 28, 29, 31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186]

/**
 * play notes with ABC notation
 */
//% weight=70 icon="\uf001" color=#D83B01 block="ABC notation"
namespace ABCNotation {
    let tuneKey: number[] = [40, 42, 44, 45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63];
    let tuneMeter: number = 4;
    let tuneTempo: number = 120;
    let noteKey: number[] = [40, 42, 44, 45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63];
    let noteNo: number = 40;
    let noteLength: number = 500;
    let makeStop: boolean = false;

    /**
     * set key
     */
    //% blockId=set_tunekey block="set K(key) to %Key"
    export function setKey(value: Key): void {
        if (value == null) value = Key.C;
        switch (value) {
            case Key.C: tuneKey = [40, 42, 44, 45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63]; break;
            case Key.G: tuneKey = [40, 42, 44, 46, 47, 49, 51, 52, 54, 56, 58, 59, 61, 63]; break;
            case Key.D: tuneKey = [41, 42, 44, 46, 47, 49, 51, 53, 54, 56, 58, 59, 61, 63]; break;
            case Key.A: tuneKey = [41, 42, 44, 46, 48, 49, 51, 53, 54, 56, 58, 60, 61, 63]; break;
            case Key.E: tuneKey = [41, 43, 44, 46, 48, 49, 51, 53, 55, 56, 58, 60, 61, 63]; break;
            case Key.B: tuneKey = [41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63]; break;
            case Key.Fsharp: tuneKey = [41, 43, 45, 46, 48, 50, 51, 53, 55, 57, 58, 60, 62, 63]; break;
            case Key.Csharp: tuneKey = [41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64]; break;
            case Key.F: tuneKey = [40, 42, 44, 45, 47, 49, 50, 52, 54, 56, 57, 59, 61, 62]; break;
            case Key.Bflat: tuneKey = [40, 42, 43, 45, 47, 49, 50, 52, 54, 55, 57, 59, 61, 62]; break;
            case Key.Eflat: tuneKey = [40, 42, 43, 45, 47, 48, 50, 52, 54, 55, 57, 59, 60, 62]; break;
            case Key.Aflat: tuneKey = [40, 41, 43, 45, 47, 48, 50, 52, 53, 55, 57, 59, 60, 62]; break;
            case Key.Dflat: tuneKey = [40, 41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62]; break;
            case Key.Gflat: tuneKey = [39, 41, 43, 45, 46, 48, 50, 51, 53, 55, 57, 58, 60, 62]; break;
            case Key.Cflat: tuneKey = [39, 41, 43, 44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62]; break;
        }
    }

    /**
     * set meter and tempo
     * @param tempoValue the tempo, eg: 120
     */
    //% blockId=set_tunemeter_and_tempo block="set L(unit note length) to %unitNoteLength , Q(tempo) to ♩= %tempoValue"
    //% tempoValue.min=4 tempoValue.max=400
    export function getMeterTempo(UNL: note2UNL, tempoValue: number): void {
        tuneMeter = UNL;
        tuneTempo = tempoValue;
    }

    /**
     * play notes
     * @param tune play notes, eg:"C D E F G A B c"
     */
    //% blockId=play_notes block="play %Notes"
    //% parts="headphone"
    export function playTune(tune: string) {
        noteLength = (60000 / (tuneTempo *tuneMeter)) * 4;
        makeStop = false;
        noteKey = tuneKey;
        let note: string[] = tune.split(' ');
        note.map(function (note: string, index: number) {
            noteKey = tuneKey;
            if (!(note.slice(-1) == "/" || parseInt(note.slice(-1)) != 0)) {
                note = note + "1"
            }
            let isEnd = false;
            for (let pos = 0; pos < note.length; pos++) {
                let noteElement = note.charAt(pos);
                if (!isEnd) {
                    switch (noteElement) {
                        case "^":
                            noteKey = noteKey.map(function (value: number, index: number) {
                                return value + 1;
                            }); break;
                        case "_":
                            noteKey = noteKey.map(function (value: number, index: number) {
                                return value - 1;
                            }); break;
                        case "=": noteKey = [40, 42, 44, 45, 47, 49, 51, 52, 54, 56, 57, 59, 61, 63]; break;
                        case "C": noteNo = noteKey[0]; break;
                        case "D": noteNo = noteKey[1]; break;
                        case "E": noteNo = noteKey[2]; break;
                        case "F": noteNo = noteKey[3]; break;
                        case "G": noteNo = noteKey[4]; break;
                        case "A": noteNo = noteKey[5]; break;
                        case "B": noteNo = noteKey[6]; break;
                        case "c": noteNo = noteKey[7]; break;
                        case "d": noteNo = noteKey[8]; break;
                        case "e": noteNo = noteKey[9]; break;
                        case "f": noteNo = noteKey[10]; break;
                        case "g": noteNo = noteKey[11]; break;
                        case "a": noteNo = noteKey[12]; break;
                        case "b": noteNo = noteKey[13]; break;
                        case "Z": case "z": noteNo = 0; break;
                        case "'": noteNo = noteNo + 12; break;
                        case ",": noteNo = noteNo - 12; break;
                        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "/":
                            getLength(note, pos);
                            isEnd = true;
                            break;
                    }
                }
            }
            if (makeStop == false) {
                if (noteNo == 0) {
                    pins.analogPitch(0, noteLength);
                } else {
                    pins.analogPitch(noteNo2freq[noteNo], noteLength)
                }
            }
        })

    }

    /**
     * Stop music
     */
    //% blockId=stop_music block="Stop music"
    export function stop(): void {
        makeStop = true;
    }

    /**
     * change the tempo by the specified amount
     * @param tempoValue The change amount, eg: 20
     */
    //% blockId=change_tempo block="Change Q(Tempo) by %tempoValue"
    export function changeTempo(tempoValue: number): void {
        tuneTempo = tuneTempo + tempoValue;
    }

    /**
     * Return the tempo
     */
    //% blockId=return_tempo block="Q(Tempo)"
    export function Tempo(): number {
        return tuneTempo;
    }

    function getLength(note: string, noteIndex: number) {
        let nLength: number;
        switch (note.substr(noteIndex)) {
            case "1": nLength = 1; break;
            case "2": nLength = 2; break;
            case "3": nLength = 3; break;
            case "4": nLength = 4; break;
            case "6": nLength = 6; break;
            case "7": nLength = 7; break;
            case "8": nLength = 8; break;
            case "12": nLength = 12; break;
            case "14": nLength = 14; break;
            case "16": nLength = 16; break;
            case "24": nLength = 24; break;
            case "28": nLength = 28; break;
            case "1/2": nLength = 0.5; break;
            case "/2": nLength = 0.5; break;
            case "/": nLength = 0.5; break;
            case "3/2": nLength = 1.5; break;
            case "1/4": nLength = 0.25; break;
            case "/4": nLength = 0.25; break;
            case "//": nLength = 0.25; break;
            case "3/4": nLength = 0.75; break;
            case "6/4": nLength = 1.5; break
            case "7/4": nLength = 1.75; break;
            case "1/8": nLength = 0.125; break;
            case "/8": nLength = 0.125; break;
            case "3/8": nLength = 0.375; break;
            case "6/8": nLength = 0.75; break;
            case "7/8": nLength = 0.875; break;
            case "12/8": nLength = 1.5; break;
            case "1/16": nLength = 0.0625; break;
            case "/16": nLength = 0.0625; break;
            case "3/16": nLength = 0.1875; break;
            case "7/16": nLength = 0.4375; break;
            case "12/16": nLength = 0.75; break;
            case "24/16": nLength = 1.5; break;
            case "1/32": nLength = 0.03125; break;
            case "/32": nLength = 0.03125; break;
            case "3/32": nLength = 0.09375; break;
            case "7/32": nLength = 0.21875; break;
            case "24/32": nLength = 0.75; break;
            case "48/32": nLength = 1.5; break;
            case "3/64": nLength = 0.046875; break;
            case "7/64": nLength = 0.109375; break;
            case "48/64": nLength = 0.75; break;
            case "96/64": nLength = 1.5; break;
            default: nLength = 1;
        }
        noteLength = ((60000 / tuneTempo) * (nLength / tuneMeter)) * 4; // ?
    }

}
