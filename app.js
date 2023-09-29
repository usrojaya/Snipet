class Mobil {
    constructor(warna, velg, jendela, kaca, kecepatan) {
        this.warna = warna;
        this.velg = velg;
        this.jendela = jendela;
        this.kaca = kaca;
        this.kecepatan = kecepatan;
        this.rem = 'normal';
    }
    
    speed() {
        for (let i = 0; i < this.kecepatan; i++) {
            // Tambahkan logika yang sesuai di sini jika diperlukan.
        }
        return this.kecepatan + 1;
    }
    
    ubahWarnaBaru(warnaBaru) {
        this.warna = warnaBaru;
    }
    
    ubahVelgRodaBaru(velgBaru) {
        this.velg = velgBaru;
    }
    
    ubahRemBaru(remBaru) {
        this.rem = remBaru;
    }
    
    remLama() {
        // Metode ini akan mengurangi kecepatan secara bertahap hingga mencapai 0.
        while (this.kecepatan > 0) {
            this.kecepatan--;
        }
    }
}
