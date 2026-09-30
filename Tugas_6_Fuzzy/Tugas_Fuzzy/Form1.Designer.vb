<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        gbInput = New GroupBox()
        lblTugas1 = New Label()
        lblTugas2 = New Label()
        lblTugas3 = New Label()
        lblTugas4 = New Label()
        lblTugas5 = New Label()
        numTugas1 = New NumericUpDown()
        numTugas2 = New NumericUpDown()
        numTugas3 = New NumericUpDown()
        numTugas4 = New NumericUpDown()
        numTugas5 = New NumericUpDown()
        lblUts = New Label()
        numUts = New NumericUpDown()
        lblUas = New Label()
        numUas = New NumericUpDown()
        gbHasil = New GroupBox()
        lblRata = New Label()
        lblRataNilai = New Label()
        lblAkhir = New Label()
        lblNilaiAkhir = New Label()
        lblGradeA = New Label()
        barA = New Panel()
        lblPctA = New Label()
        lblGradeB = New Label()
        barB = New Panel()
        lblPctB = New Label()
        lblGradeC = New Label()
        barC = New Panel()
        lblPctC = New Label()
        lblGradeGagal = New Label()
        barGagal = New Panel()
        lblPctGagal = New Label()
        lblKesimpulan = New Label()
        lblStatus = New Label()
        lblKonteks = New Label()
        lblJudul = New Label()
        btnHitung = New Button()
        btnReset = New Button()
        lblRumus = New Label()
        gbInput.SuspendLayout()
        gbHasil.SuspendLayout()
        numTugas1.BeginInit()
        numTugas2.BeginInit()
        numTugas3.BeginInit()
        numTugas4.BeginInit()
        numTugas5.BeginInit()
        numUts.BeginInit()
        numUas.BeginInit()
        SuspendLayout()
        ' 
        ' gbInput
        ' 
        gbInput.Controls.Add(lblTugas1)
        gbInput.Controls.Add(lblTugas2)
        gbInput.Controls.Add(lblTugas3)
        gbInput.Controls.Add(lblTugas4)
        gbInput.Controls.Add(lblTugas5)
        gbInput.Controls.Add(numTugas1)
        gbInput.Controls.Add(numTugas2)
        gbInput.Controls.Add(numTugas3)
        gbInput.Controls.Add(numTugas4)
        gbInput.Controls.Add(numTugas5)
        gbInput.Controls.Add(lblUts)
        gbInput.Controls.Add(numUts)
        gbInput.Controls.Add(lblUas)
        gbInput.Controls.Add(numUas)
        gbInput.Location = New Point(16, 42)
        gbInput.Name = "gbInput"
        gbInput.Size = New Size(488, 152)
        gbInput.TabIndex = 0
        gbInput.TabStop = False
        gbInput.Text = "Data Nilai (Tugas 50% - UTS 20% - UAS 30%)"
        ' 
        ' lblTugas1
        ' 
        lblTugas1.Location = New Point(16, 20)
        lblTugas1.Name = "lblTugas1"
        lblTugas1.Size = New Size(81, 18)
        lblTugas1.TabIndex = 0
        lblTugas1.Text = "Tugas 1"
        lblTugas1.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' lblTugas2
        ' 
        lblTugas2.Location = New Point(109, 20)
        lblTugas2.Name = "lblTugas2"
        lblTugas2.Size = New Size(81, 18)
        lblTugas2.TabIndex = 1
        lblTugas2.Text = "Tugas 2"
        lblTugas2.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' lblTugas3
        ' 
        lblTugas3.Location = New Point(202, 20)
        lblTugas3.Name = "lblTugas3"
        lblTugas3.Size = New Size(81, 18)
        lblTugas3.TabIndex = 2
        lblTugas3.Text = "Tugas 3"
        lblTugas3.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' lblTugas4
        ' 
        lblTugas4.Location = New Point(295, 20)
        lblTugas4.Name = "lblTugas4"
        lblTugas4.Size = New Size(81, 18)
        lblTugas4.TabIndex = 3
        lblTugas4.Text = "Tugas 4"
        lblTugas4.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' lblTugas5
        ' 
        lblTugas5.Location = New Point(388, 20)
        lblTugas5.Name = "lblTugas5"
        lblTugas5.Size = New Size(81, 18)
        lblTugas5.TabIndex = 4
        lblTugas5.Text = "Tugas 5"
        lblTugas5.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' numTugas1
        ' 
        numTugas1.Location = New Point(16, 40)
        numTugas1.Maximum = New Decimal(100)
        numTugas1.Name = "numTugas1"
        numTugas1.Size = New Size(81, 26)
        numTugas1.TabIndex = 5
        ' 
        ' numTugas2
        ' 
        numTugas2.Location = New Point(109, 40)
        numTugas2.Maximum = New Decimal(100)
        numTugas2.Name = "numTugas2"
        numTugas2.Size = New Size(81, 26)
        numTugas2.TabIndex = 6
        ' 
        ' numTugas3
        ' 
        numTugas3.Location = New Point(202, 40)
        numTugas3.Maximum = New Decimal(100)
        numTugas3.Name = "numTugas3"
        numTugas3.Size = New Size(81, 26)
        numTugas3.TabIndex = 7
        ' 
        ' numTugas4
        ' 
        numTugas4.Location = New Point(295, 40)
        numTugas4.Maximum = New Decimal(100)
        numTugas4.Name = "numTugas4"
        numTugas4.Size = New Size(81, 26)
        numTugas4.TabIndex = 8
        ' 
        ' numTugas5
        ' 
        numTugas5.Location = New Point(388, 40)
        numTugas5.Maximum = New Decimal(100)
        numTugas5.Name = "numTugas5"
        numTugas5.Size = New Size(81, 26)
        numTugas5.TabIndex = 9
        ' 
        ' lblUts
        ' 
        lblUts.AutoSize = True
        lblUts.Location = New Point(16, 88)
        lblUts.Name = "lblUts"
        lblUts.TabIndex = 10
        lblUts.Text = "Nilai UTS (20%):"
        ' 
        ' numUts
        ' 
        numUts.Location = New Point(388, 85)
        numUts.Maximum = New Decimal(100)
        numUts.Name = "numUts"
        numUts.Size = New Size(81, 26)
        numUts.TabIndex = 11
        ' 
        ' lblUas
        ' 
        lblUas.AutoSize = True
        lblUas.Location = New Point(16, 122)
        lblUas.Name = "lblUas"
        lblUas.TabIndex = 12
        lblUas.Text = "Nilai UAS (30%):"
        ' 
        ' numUas
        ' 
        numUas.Location = New Point(388, 119)
        numUas.Maximum = New Decimal(100)
        numUas.Name = "numUas"
        numUas.Size = New Size(81, 26)
        numUas.TabIndex = 13
        ' 
        ' gbHasil
        ' 
        gbHasil.Controls.Add(lblRata)
        gbHasil.Controls.Add(lblRataNilai)
        gbHasil.Controls.Add(lblAkhir)
        gbHasil.Controls.Add(lblNilaiAkhir)
        gbHasil.Controls.Add(lblGradeA)
        gbHasil.Controls.Add(barA)
        gbHasil.Controls.Add(lblPctA)
        gbHasil.Controls.Add(lblGradeB)
        gbHasil.Controls.Add(barB)
        gbHasil.Controls.Add(lblPctB)
        gbHasil.Controls.Add(lblGradeC)
        gbHasil.Controls.Add(barC)
        gbHasil.Controls.Add(lblPctC)
        gbHasil.Controls.Add(lblGradeGagal)
        gbHasil.Controls.Add(barGagal)
        gbHasil.Controls.Add(lblPctGagal)
        gbHasil.Controls.Add(lblKesimpulan)
        gbHasil.Controls.Add(lblStatus)
        gbHasil.Controls.Add(lblKonteks)
        gbHasil.Location = New Point(16, 202)
        gbHasil.Name = "gbHasil"
        gbHasil.Size = New Size(488, 288)
        gbHasil.TabIndex = 1
        gbHasil.TabStop = False
        gbHasil.Text = "Hasil Fuzzy (A 70-100, B 60-95, C 40-80, GAGAL 0-60)"
        ' 
        ' lblRata
        ' 
        lblRata.AutoSize = True
        lblRata.Location = New Point(16, 28)
        lblRata.Name = "lblRata"
        lblRata.TabIndex = 0
        lblRata.Text = "Rata-rata tugas:"
        ' 
        ' lblRataNilai
        ' 
        lblRataNilai.Location = New Point(200, 25)
        lblRataNilai.Name = "lblRataNilai"
        lblRataNilai.Size = New Size(272, 22)
        lblRataNilai.TabIndex = 1
        lblRataNilai.Text = "0,00"
        lblRataNilai.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblAkhir
        ' 
        lblAkhir.AutoSize = True
        lblAkhir.Location = New Point(16, 58)
        lblAkhir.Name = "lblAkhir"
        lblAkhir.TabIndex = 2
        lblAkhir.Text = "Nilai akhir:"
        ' 
        ' lblNilaiAkhir
        ' 
        lblNilaiAkhir.Location = New Point(200, 55)
        lblNilaiAkhir.Name = "lblNilaiAkhir"
        lblNilaiAkhir.Size = New Size(272, 22)
        lblNilaiAkhir.TabIndex = 3
        lblNilaiAkhir.Text = "0,00"
        lblNilaiAkhir.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblGradeA
        ' 
        lblGradeA.AutoSize = True
        lblGradeA.Location = New Point(16, 90)
        lblGradeA.Name = "lblGradeA"
        lblGradeA.TabIndex = 4
        lblGradeA.Text = "A - Tinggi"
        ' 
        ' barA
        ' 
        barA.BackColor = Color.DarkGreen
        barA.Location = New Point(200, 93)
        barA.Name = "barA"
        barA.Size = New Size(0, 14)
        barA.TabIndex = 5
        ' 
        ' lblPctA
        ' 
        lblPctA.Location = New Point(392, 89)
        lblPctA.Name = "lblPctA"
        lblPctA.Size = New Size(80, 20)
        lblPctA.TabIndex = 6
        lblPctA.Text = "0,0 %"
        lblPctA.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblGradeB
        ' 
        lblGradeB.AutoSize = True
        lblGradeB.Location = New Point(16, 114)
        lblGradeB.Name = "lblGradeB"
        lblGradeB.TabIndex = 7
        lblGradeB.Text = "B - Sedang"
        ' 
        ' barB
        ' 
        barB.BackColor = Color.RoyalBlue
        barB.Location = New Point(200, 117)
        barB.Name = "barB"
        barB.Size = New Size(0, 14)
        barB.TabIndex = 8
        ' 
        ' lblPctB
        ' 
        lblPctB.Location = New Point(392, 113)
        lblPctB.Name = "lblPctB"
        lblPctB.Size = New Size(80, 20)
        lblPctB.TabIndex = 9
        lblPctB.Text = "0,0 %"
        lblPctB.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblGradeC
        ' 
        lblGradeC.AutoSize = True
        lblGradeC.Location = New Point(16, 138)
        lblGradeC.Name = "lblGradeC"
        lblGradeC.TabIndex = 10
        lblGradeC.Text = "C - Cukup"
        ' 
        ' barC
        ' 
        barC.BackColor = Color.DarkOrange
        barC.Location = New Point(200, 141)
        barC.Name = "barC"
        barC.Size = New Size(0, 14)
        barC.TabIndex = 11
        ' 
        ' lblPctC
        ' 
        lblPctC.Location = New Point(392, 137)
        lblPctC.Name = "lblPctC"
        lblPctC.Size = New Size(80, 20)
        lblPctC.TabIndex = 12
        lblPctC.Text = "0,0 %"
        lblPctC.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblGradeGagal
        ' 
        lblGradeGagal.AutoSize = True
        lblGradeGagal.Location = New Point(16, 162)
        lblGradeGagal.Name = "lblGradeGagal"
        lblGradeGagal.TabIndex = 13
        lblGradeGagal.Text = "GAGAL"
        ' 
        ' barGagal
        ' 
        barGagal.BackColor = Color.Firebrick
        barGagal.Location = New Point(200, 165)
        barGagal.Name = "barGagal"
        barGagal.Size = New Size(0, 14)
        barGagal.TabIndex = 14
        ' 
        ' lblPctGagal
        ' 
        lblPctGagal.Location = New Point(392, 161)
        lblPctGagal.Name = "lblPctGagal"
        lblPctGagal.Size = New Size(80, 20)
        lblPctGagal.TabIndex = 15
        lblPctGagal.Text = "0,0 %"
        lblPctGagal.TextAlign = ContentAlignment.MiddleLeft
        ' 
        ' lblKesimpulan
        ' 
        lblKesimpulan.AutoSize = True
        lblKesimpulan.Font = New Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold)
        lblKesimpulan.Location = New Point(16, 202)
        lblKesimpulan.Name = "lblKesimpulan"
        lblKesimpulan.TabIndex = 16
        lblKesimpulan.Text = "Klasifikasi:"
        ' 
        ' lblStatus
        ' 
        lblStatus.BorderStyle = BorderStyle.FixedSingle
        lblStatus.Font = New Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold)
        lblStatus.Location = New Point(200, 192)
        lblStatus.Name = "lblStatus"
        lblStatus.Size = New Size(272, 32)
        lblStatus.TabIndex = 17
        lblStatus.Text = "-"
        lblStatus.TextAlign = ContentAlignment.MiddleCenter
        ' 
        ' lblKonteks
        ' 
        lblKonteks.BorderStyle = BorderStyle.FixedSingle
        lblKonteks.ForeColor = SystemColors.GrayText
        lblKonteks.Location = New Point(16, 232)
        lblKonteks.Name = "lblKonteks"
        lblKonteks.Padding = New Padding(8, 6, 0, 0)
        lblKonteks.Size = New Size(456, 50)
        lblKonteks.TabIndex = 18
        lblKonteks.Text = "Isi nilai tugas, UTS, dan UAS untuk melihat klasifikasi."
        ' 
        ' lblJudul
        ' 
        lblJudul.AutoSize = True
        lblJudul.Font = New Font("Segoe UI", 13F, System.Drawing.FontStyle.Bold)
        lblJudul.Location = New Point(16, 14)
        lblJudul.Name = "lblJudul"
        lblJudul.TabIndex = 2
        lblJudul.Text = "Penilaian Akhir Mahasiswa (Fuzzy)"
        ' 
        ' btnHitung
        ' 
        btnHitung.Location = New Point(16, 500)
        btnHitung.Name = "btnHitung"
        btnHitung.Size = New Size(120, 32)
        btnHitung.TabIndex = 3
        btnHitung.Text = "Hitung"
        btnHitung.UseVisualStyleBackColor = True
        ' 
        ' btnReset
        ' 
        btnReset.Location = New Point(144, 500)
        btnReset.Name = "btnReset"
        btnReset.Size = New Size(120, 32)
        btnReset.TabIndex = 4
        btnReset.Text = "Reset"
        btnReset.UseVisualStyleBackColor = True
        ' 
        ' lblRumus
        ' 
        lblRumus.AutoSize = True
        lblRumus.ForeColor = SystemColors.GrayText
        lblRumus.Location = New Point(16, 542)
        lblRumus.Name = "lblRumus"
        lblRumus.TabIndex = 5
        lblRumus.Text = "Nilai akhir = (rata-rata tugas x 50%) + (UTS x 20%) + (UAS x 30%)"
        ' 
        ' Form1
        ' 
        AutoScaleDimensions = New SizeF(7F, 15F)
        AutoScaleMode = AutoScaleMode.Font
        AutoScroll = True
        ClientSize = New Size(520, 566)
        Controls.Add(lblRumus)
        Controls.Add(btnReset)
        Controls.Add(btnHitung)
        Controls.Add(lblJudul)
        Controls.Add(gbHasil)
        Controls.Add(gbInput)
        Font = New Font("Segoe UI", 9F)
        MaximumSize = New Size(1200, 900)
        MinimumSize = New Size(536, 605)
        Name = "Form1"
        StartPosition = FormStartPosition.CenterScreen
        Text = "Penilaian Akhir Mahasiswa (Fuzzy)"
        gbInput.ResumeLayout(False)
        gbInput.PerformLayout()
        gbHasil.ResumeLayout(False)
        gbHasil.PerformLayout()
        numTugas1.EndInit()
        numTugas2.EndInit()
        numTugas3.EndInit()
        numTugas4.EndInit()
        numTugas5.EndInit()
        numUts.EndInit()
        numUas.EndInit()
        ResumeLayout(False)
        PerformLayout()
    End Sub

    Friend WithEvents gbInput As GroupBox
    Friend WithEvents lblTugas1 As Label
    Friend WithEvents lblTugas2 As Label
    Friend WithEvents lblTugas3 As Label
    Friend WithEvents lblTugas4 As Label
    Friend WithEvents lblTugas5 As Label
    Friend WithEvents numTugas1 As NumericUpDown
    Friend WithEvents numTugas2 As NumericUpDown
    Friend WithEvents numTugas3 As NumericUpDown
    Friend WithEvents numTugas4 As NumericUpDown
    Friend WithEvents numTugas5 As NumericUpDown
    Friend WithEvents lblUts As Label
    Friend WithEvents numUts As NumericUpDown
    Friend WithEvents lblUas As Label
    Friend WithEvents numUas As NumericUpDown
    Friend WithEvents gbHasil As GroupBox
    Friend WithEvents lblRata As Label
    Friend WithEvents lblRataNilai As Label
    Friend WithEvents lblAkhir As Label
    Friend WithEvents lblNilaiAkhir As Label
    Friend WithEvents lblGradeA As Label
    Friend WithEvents barA As Panel
    Friend WithEvents lblPctA As Label
    Friend WithEvents lblGradeB As Label
    Friend WithEvents barB As Panel
    Friend WithEvents lblPctB As Label
    Friend WithEvents lblGradeC As Label
    Friend WithEvents barC As Panel
    Friend WithEvents lblPctC As Label
    Friend WithEvents lblGradeGagal As Label
    Friend WithEvents barGagal As Panel
    Friend WithEvents lblPctGagal As Label
    Friend WithEvents lblKesimpulan As Label
    Friend WithEvents lblStatus As Label
    Friend WithEvents lblKonteks As Label
    Friend WithEvents lblJudul As Label
    Friend WithEvents btnHitung As Button
    Friend WithEvents btnReset As Button
    Friend WithEvents lblRumus As Label

End Class
