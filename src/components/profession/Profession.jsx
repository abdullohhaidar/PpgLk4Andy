import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Refleksi PPL",
    description:
      "Pengalaman dan pembelajaran selama menjalani praktik mengajar di sekolah menjadi proses penting dalam memahami dunia pendidikan secara langsung serta mengembangkan kemampuan sebagai calon pendidik.",
    link: "https://drive.google.com/drive/folders/1x28PyvbmFREiKQhrEb2GZ9DHcli-3Cc2",
  },
  {
    id: 2,
    title: "Filosofi Mengajar",
    description:
      "Pandangan seorang calon guru dalam menciptakan proses pembelajaran yang nyaman, aktif, dan bermakna agar siswa dapat berkembang baik secara akademik maupun karakter.",
    link: "https://drive.google.com/drive/folders/1q9eLJiGDAGWWoc_O2IaSarns5qlaMXzu",
  },
  
];

const Profession = () => {
  return (
    <div
      className="content w-[1100px] flex justify-center max-xxl:px-2 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
