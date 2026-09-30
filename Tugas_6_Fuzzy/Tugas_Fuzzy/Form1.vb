Public Class Form1

    Private Const BobotTugas As Double = 0.5
    Private Const BobotUts As Double = 0.2
    Private Const BobotUas As Double = 0.3

    Private Const LebarBar As Integer = 180

    Private Shared ReadOnly Himpunan As HimpunanFuzzy() = {
        New HimpunanFuzzy("A", "Tinggi", Color.DarkGreen, 70.0, 85.0, 100.0, 100.0),
        New HimpunanFuzzy("B", "Sedang", Color.RoyalBlue, 60.0, 77.0, 92.0, 95.0),
        New HimpunanFuzzy("C", "Cukup", Color.DarkOrange, 40.0, 58.0, 72.0, 80.0),
        New HimpunanFuzzy("GAGAL", "Gagal", Color.Firebrick, -1.0, 0.0, 45.0, 60.0)
    }

    Private _bar() As Panel
    Private _grade() As Label
    Private _pct() As Label

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        _bar = {barA, barB, barC, barGagal}
        _grade = {lblGradeA, lblGradeB, lblGradeC, lblGradeGagal}
        _pct = {lblPctA, lblPctB, lblPctC, lblPctGagal}

        For i As Integer = 0 To Himpunan.Length - 1
            _grade(i).Text = TeksKlasifikasi(Himpunan(i))
            _grade(i).ForeColor = Himpunan(i).Warna
            _bar(i).BackColor = Himpunan(i).Warna
        Next

        TampilkanHasil()
    End Sub

    Private Sub btnHitung_Click(sender As Object, e As EventArgs) Handles btnHitung.Click
        TampilkanHasil()
    End Sub

    Private Sub NilaiBerubah(sender As Object, e As EventArgs) Handles numTugas1.ValueChanged,
                                                                   numTugas2.ValueChanged,
                                                                   numTugas3.ValueChanged,
                                                                   numTugas4.ValueChanged,
                                                                   numTugas5.ValueChanged,
                                                                   numUts.ValueChanged,
                                                                   numUas.ValueChanged
        TampilkanHasil()
    End Sub

    Private Sub btnReset_Click(sender As Object, e As EventArgs) Handles btnReset.Click
        numTugas1.Value = 0
        numTugas2.Value = 0
        numTugas3.Value = 0
        numTugas4.Value = 0
        numTugas5.Value = 0
        numUts.Value = 0
        numUas.Value = 0
        numTugas1.Focus()
    End Sub

    Private Sub TampilkanHasil()
        Dim nilaiTugas As New List(Of Double) From {
            CDbl(numTugas1.Value),
            CDbl(numTugas2.Value),
            CDbl(numTugas3.Value),
            CDbl(numTugas4.Value),
            CDbl(numTugas5.Value)
        }

        Dim rataTugas As Double = nilaiTugas.Average()
        Dim nilaiAkhir As Double = (rataTugas * BobotTugas) +
                                  (CDbl(numUts.Value) * BobotUts) +
                                  (CDbl(numUas.Value) * BobotUas)

        Dim derajat(0 To Himpunan.Length - 1) As Double
        Dim jumlah As Double = 0

        For i As Integer = 0 To Himpunan.Length - 1
            derajat(i) = Himpunan(i).DerajatKeanggotaan(nilaiAkhir)
            jumlah += derajat(i)
        Next

        Dim pembagi As Double = If(jumlah > 0, jumlah, 1.0)

        Dim terbaik As Integer = 0
        For i As Integer = 1 To Himpunan.Length - 1
            If derajat(i) > derajat(terbaik) Then
                terbaik = i
            End If
        Next

        For i As Integer = 0 To Himpunan.Length - 1
            Dim persen As Double = derajat(i) * 100.0 / pembagi
            _pct(i).Text = $"{persen:0.0} %"
            _bar(i).Width = CInt(LebarBar * persen / 100.0)
        Next

        lblRataNilai.Text = rataTugas.ToString("0.00")
        lblNilaiAkhir.Text = nilaiAkhir.ToString("0.00")
        lblStatus.Text = TeksKlasifikasi(Himpunan(terbaik))
        lblStatus.ForeColor = Himpunan(terbaik).Warna
        lblStatus.BackColor = Color.FromArgb(35, Himpunan(terbaik).Warna)
        lblKonteks.Text = SusunKonteks(nilaiAkhir, terbaik, derajat)
    End Sub

    Private Function SusunKonteks(nilaiAkhir As Double, terbaik As Integer, derajat() As Double) As String
        Dim total As Double = If(derajat.Sum() > 0, derajat.Sum(), 1.0)

        Dim rincian As New List(Of String)()
        For Each i As Integer In Enumerable.Range(0, Himpunan.Length).OrderByDescending(Function(x) derajat(x))
            Dim persen As Double = derajat(i) * 100.0 / total
            If persen > 0 Then
                rincian.Add($"{Himpunan(i).Huruf} {persen:0.0}%")
            End If
        Next

        Dim catatan As String
        Select Case Himpunan(terbaik).Huruf
            Case "A"
                catatan = "Interpretasi: prestasi sangat baik, pertahankan dan tingkatkan."
            Case "B"
                catatan = "Interpretasi: hasil baik, tingkatkan tugas untuk naik ke A."
            Case "C"
                catatan = "Interpretasi: hasil pas-pasan, perbanyak latihan soal."
            Case Else
                catatan = "Interpretasi: belum mencapai standar penilaian, diperlukan remedial."
        End Select

        Return $"Nilai akhir {nilaiAkhir:0.00} - {String.Join(" | ", rincian)}" & Environment.NewLine & catatan
    End Function

    Private Shared Function TeksKlasifikasi(h As HimpunanFuzzy) As String
        Return If(h.Huruf = "GAGAL", "GAGAL", $"{h.Huruf} ({h.Keterangan})")
    End Function

    Private NotInheritable Class HimpunanFuzzy
        Public ReadOnly Property Huruf As String
        Public ReadOnly Property Keterangan As String
        Public ReadOnly Property Warna As Color
        Public ReadOnly Property Titik As (a As Double, b As Double, c As Double, d As Double)

        Public Sub New(nilaiHuruf As String, keteranganPredikat As String, warnaPredikat As Color,
                       a As Double, b As Double, c As Double, d As Double)
            Huruf = nilaiHuruf
            Keterangan = keteranganPredikat
            Warna = warnaPredikat
            Titik = (a, b, c, d)
        End Sub

        Public Function DerajatKeanggotaan(nilai As Double) As Double
            Dim derajat As Double

            If nilai <= Titik.a Then
                derajat = 0.0
            ElseIf nilai < Titik.b Then
                derajat = (nilai - Titik.a) / (Titik.b - Titik.a)
            ElseIf nilai <= Titik.c Then
                derajat = 1.0
            ElseIf nilai < Titik.d Then
                derajat = (Titik.d - nilai) / (Titik.d - Titik.c)
            Else
                derajat = 0.0
            End If

            Return Math.Clamp(derajat, 0.0, 1.0)
        End Function
    End Class
End Class
