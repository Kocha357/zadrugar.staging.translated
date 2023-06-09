const srbLang = document.querySelectorAll(".srb-lang");
const engLang = document.querySelectorAll(".eng-lang");

window.addEventListener("load", () => {
  const srbData = localStorage.getItem("sr");
  const engData = localStorage.getItem("en");

  if (srbData) {
    let data = JSON.parse(srbData);
    const currentFilename = location.pathname.split("/").pop();

    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const html = document.querySelector("html");
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const rasp = document.querySelector(".rasp");
    const black = document.querySelector(".black");
    const agrr = document.querySelector(".agrr");
    const contact = document.querySelector(".cont");
    const homeM = document.querySelector(".home-m");
    const aboutM = document.querySelector(".about-m");
    const raspM = document.querySelector(".rasp-m");
    const blackM = document.querySelector(".black-m");
    const agrrM = document.querySelector(".agrr-m");
    const constactM = document.querySelector(".contact-m");
    const headingTxt = document.querySelector(".heading-txt");
    const headingBtn = document.querySelector(".heading-btn");
    const knowUs = document.querySelector(".know-us");
    const knowUsTxt = document.querySelector(".know-us-txt");
    const storage = document.querySelector(".storage");
    const storageTxt = document.querySelector(".storage-txt");
    const quality = document.querySelector(".quality-h3");
    const qualityTxt = document.querySelector(".quality-txt");
    const industry = document.querySelector(".industry-h3");
    const industryTxt = document.querySelector(".industry-txt");
    const goals = document.querySelector(".goals-h3");
    const goalsTxt = document.querySelector(".goals-txt");
    const raspHeader = document.querySelector(".rasp-h2");
    const raspTxt = document.querySelector(".rasp-txt");
    const raspBtn = document.querySelector(".raspberry-btn");
    const raspContact = document.querySelector(".rasp-contact");
    const blackHeading = document.querySelectorAll(".black");
    const bbTxt = document.querySelector(".bb-txt");
    const bbBtn = document.querySelector(".blackberry-btn");
    const aggHeading = document.querySelectorAll(".agg");
    const apTxt = document.querySelector(".ap-txt");
    const pharmacyBtn = document.querySelector(".pharmacy-btn");
    const contactHeading = document.querySelector(".contact-h2");
    const contactSub = document.querySelector(".substring-cont");
    const instaTxt = document.querySelector(".insta-txt");
    const emailBtn = document.querySelector(".email-btn");
    const footerTxt = document.querySelector(".footer-txt");
    const homePharm = document.querySelector(".home-pharm");
    const raspPharm = document.querySelector(".rasp-pharm");
    const agrHeading = document.querySelector(".agr-h1");
    const pharmTxtAgr = document.querySelector(".pharm-txt-agr");
    const summary = document.querySelectorAll("summary");
    const basfP = document.querySelector(".basf-p");
    const fitofertP = document.querySelector(".fitofert-p");
    const glifomarkP = document.querySelector(".glifomark-p");
    const lunaP = document.querySelector(".luna-p");
    const saturnP = document.querySelector(".saturn-p");
    const tepekkiP = document.querySelector(".tepekki-p");
    const instaHref = document.querySelector(".insta-href");
    const thanksP = document.querySelector(".thanks-p");
    const thanksAgain = document.querySelector(".thanks-again");
    const raspHomeLink = document.querySelector(".rasp-home-link");
    const raspToBb = document.querySelector(".rasp-to-bb");
    const raspTxt1 = document.querySelector(".rasp-txt-pg");
    const raspTxt2 = document.querySelector(".rasp-txt-pg2");
    const raspTxt3 = document.querySelector(".rasp-txt-pg3");
    const raspH1 = document.querySelector(".rasp-h1");
    const blackH1 = document.querySelector(".bb-b-h1");
    const blackHomeLink = document.querySelector(".black-home-link");
    const bbToAp = document.querySelector(".bb-to-ap");
    const bbTxt1 = document.querySelector(".bb-txt-pg");
    const bbTxt2 = document.querySelector(".bb-txt-pg2");
    const bbTxt3 = document.querySelector(".bb-txt-pg3");
    /**navigation and head */
    if (currentFilename === "index.html") {
      html.setAttribute("lang", "sr");
      home.innerText = data.home_desk.sr;
      about.innerText = data.about_desk.sr;
      rasp.innerText = data.raspberries_desk.sr;
      black.innerText = data.blackberries_desk.sr;
      agrr.innerText = data.aggr_desk.sr;
      contact.innerText = data.contact_desk.sr;
      homeM.innerText = data.home_mob.sr;
      aboutM.innerText = data.about_mob.sr;
      raspM.innerText = data.raspberries_mob.sr;
      blackM.innerText = data.blackberries_mob.sr;
      agrrM.innerText = data.aggr_mob.sr;
      constactM.innerText = data.contact_mob.sr;
      title.innerText = data.title_index.sr;
      description.setAttribute("content", data.description_index.sr);
      keywords.setAttribute("content", data.keywords_index.sr);
      /**about section */
      headingTxt.innerText = data.heading_txt.sr;
      headingBtn.innerText = data.heading_btn.sr;
      knowUs.innerText = data.know_us.sr;
      knowUsTxt.innerText = data.know_us_txt.sr;
      storage.innerText = data.storage.sr;
      storageTxt.innerText = data.storage_txt.sr;
      quality.innerText = data.quality.sr;
      qualityTxt.innerText = data.quality_txt.sr;
      industry.innerText = data.industry.sr;
      industryTxt.innerText = data.industry_txt.sr;
      goals.innerText = data.goals.sr;
      goalsTxt.innerText = data.goals_txt.sr;
      raspHeader.innerText = data.rasp_h2.sr;
      raspTxt.innerText = data.rasp_txt.sr;
      raspBtn.innerText = data.rasp_btn.sr;
      raspContact.innerText = data.rasp_contact.sr;
      blackHeading.forEach((heading) => {
        heading.innerText = data.bb_h2.sr;
      });
      bbTxt.innerText = data.bb_txt.sr;
      bbBtn.innerText = data.bb_btn.sr;
      aggHeading.forEach((heading) => {
        heading.innerText = data.agg_h2.sr;
      });
      apTxt.innerText = data.ap_txt.sr;
      pharmacyBtn.innerText = data.ap_btn.sr;
      contactHeading.innerText = data.contact_h2.sr;
      contactSub.innerText = data.contact_sub.sr;
      instaTxt.innerText = data.insta_txt.sr;
      emailBtn.innerText = data.email_btn.sr;
      footerTxt.innerText = data.footer_txt.sr;
    } else if (currentFilename === "pharmacyPage.html") {
      html.setAttribute("lang", "sr");
      contactHeading.innerText = data.contact_h2.sr;
      contactSub.innerText = data.contact_sub.sr;
      instaTxt.innerText = data.insta_txt.sr;
      emailBtn.innerText = data.email_btn.sr;
      title.innerText = data.title_pharm.sr;
      description.setAttribute("content", data.pharm_desc.sr);
      keywords.setAttribute("content", data.pharm_key.sr);
      homePharm.innerText = data.home_pharm.sr;
      raspPharm.innerText = data.rasp_pharm.sr;
      agrHeading.innerText = data.agr_h1.sr;
      footerTxt.innerText = data.footer_txt.sr;
      pharmTxtAgr.innerText = data.pharm_txt_agr.sr;
      summary.forEach((word) => {
        word.innerText = data.summary.sr;
      });
      basfP.innerText = data.basf_p.sr;
      fitofertP.innerText = data.fitofert_p.sr;
      glifomarkP.innerText = data.glifomark_p.sr;
      lunaP.innerText = data.luna_p.sr;
      saturnP.innerText = data.saturn_p.sr;
      tepekkiP.innerText = data.tepekki_p.sr;
      thanksP.innerText = data.thanks_p.sr;
      instaHref.innerText = data.insta_href.sr;
      thanksAgain.innerText = data.thanks_again.sr;
    } else if (currentFilename === "raspberryPage.html") {
      html.setAttribute("lang", "sr");
      contactHeading.innerText = data.contact_h2.sr;
      contactSub.innerText = data.contact_sub.sr;
      instaTxt.innerText = data.insta_txt.sr;
      emailBtn.innerText = data.email_btn.sr;
      footerTxt.innerText = data.footer_txt.sr;
      title.innerText = data.rasp_title.sr;
      description.setAttribute("content", data.rasp_desc.sr);
      keywords.setAttribute("content", data.rasp_key.sr);
      raspHomeLink.innerText = data.rasp_home_link.sr;
      raspToBb.innerText = data.rasp_to_bb.sr;
      raspTxt1.innerText = data.rasp_txt_1.sr;
      raspTxt2.innerText = data.rasp_txt_2.sr;
      raspTxt3.innerText = data.rasp_txt_3.sr;
      raspH1.innerText = data.rasp_h1.sr;
    } else if (currentFilename === "blackberryPage.html") {
      html.setAttribute("lang", "sr");
      contactHeading.innerText = data.contact_h2.sr;
      contactSub.innerText = data.contact_sub.sr;
      instaTxt.innerText = data.insta_txt.sr;
      emailBtn.innerText = data.email_btn.sr;
      footerTxt.innerText = data.footer_txt.sr;
      title.innerText = data.black_title.sr;
      description.setAttribute("content", data.black_desc.sr);
      keywords.setAttribute("content", data.black_key.sr);
      blackHomeLink.innerText = data.black_home_link.sr;
      bbToAp.innerText = data.black_to_ap.sr;
      bbTxt1.innerText = data.black_txt_1.sr;
      bbTxt2.innerText = data.black_txt_2.sr;
      bbTxt3.innerText = data.black_txt_3.sr;
      blackH1.innerText = data.black_h1.sr;
    }
  } else {
    const currentFilename = location.pathname.split("/").pop();
    data = JSON.parse(engData);

    const title = document.querySelector("title");
    const description = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const html = document.querySelector("html");
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const rasp = document.querySelector(".rasp");
    const black = document.querySelector(".black");
    const agrr = document.querySelector(".agrr");
    const contact = document.querySelector(".cont");
    const homeM = document.querySelector(".home-m");
    const aboutM = document.querySelector(".about-m");
    const raspM = document.querySelector(".rasp-m");
    const blackM = document.querySelector(".black-m");
    const agrrM = document.querySelector(".agrr-m");
    const constactM = document.querySelector(".contact-m");
    const headingTxt = document.querySelector(".heading-txt");
    const headingBtn = document.querySelector(".heading-btn");
    const knowUs = document.querySelector(".know-us");
    const knowUsTxt = document.querySelector(".know-us-txt");
    const storage = document.querySelector(".storage");
    const storageTxt = document.querySelector(".storage-txt");
    const quality = document.querySelector(".quality-h3");
    const qualityTxt = document.querySelector(".quality-txt");
    const industry = document.querySelector(".industry-h3");
    const industryTxt = document.querySelector(".industry-txt");
    const goals = document.querySelector(".goals-h3");
    const goalsTxt = document.querySelector(".goals-txt");
    const raspHeader = document.querySelector(".rasp-h2");
    const raspTxt = document.querySelector(".rasp-txt");
    const raspBtn = document.querySelector(".raspberry-btn");
    const raspContact = document.querySelector(".rasp-contact");
    const blackHeading = document.querySelectorAll(".black");
    const bbTxt = document.querySelector(".bb-txt");
    const bbBtn = document.querySelector(".blackberry-btn");
    const aggHeading = document.querySelectorAll(".agg");
    const apTxt = document.querySelector(".ap-txt");
    const pharmacyBtn = document.querySelector(".pharmacy-btn");
    const contactHeading = document.querySelector(".contact-h2");
    const contactSub = document.querySelector(".substring-cont");
    const instaTxt = document.querySelector(".insta-txt");
    const emailBtn = document.querySelector(".email-btn");
    const footerTxt = document.querySelector(".footer-txt");
    const homePharm = document.querySelector(".home-pharm");
    const raspPharm = document.querySelector(".rasp-pharm");
    const agrHeading = document.querySelector(".agr-h1");
    const pharmTxtAgr = document.querySelector(".pharm-txt-agr");
    const summary = document.querySelectorAll("summary");
    const basfP = document.querySelector(".basf-p");
    const fitofertP = document.querySelector(".fitofert-p");
    const glifomarkP = document.querySelector(".glifomark-p");
    const lunaP = document.querySelector(".luna-p");
    const saturnP = document.querySelector(".saturn-p");
    const tepekkiP = document.querySelector(".tepekki-p");
    const instaHref = document.querySelector(".insta-href");
    const thanksP = document.querySelector(".thanks-p");
    const thanksAgain = document.querySelector(".thanks-again");
    const raspHomeLink = document.querySelector(".rasp-home-link");
    const raspToBb = document.querySelector(".rasp-to-bb");
    const raspTxt1 = document.querySelector(".rasp-txt-pg");
    const raspTxt2 = document.querySelector(".rasp-txt-pg2");
    const raspTxt3 = document.querySelector(".rasp-txt-pg3");
    const raspH1 = document.querySelector(".rasp-h1");
    const blackH1 = document.querySelector(".bb-b-h1");
    const blackHomeLink = document.querySelector(".black-home-link");
    const bbToAp = document.querySelector(".bb-to-ap");
    const bbTxt1 = document.querySelector(".bb-txt-pg");
    const bbTxt2 = document.querySelector(".bb-txt-pg2");
    const bbTxt3 = document.querySelector(".bb-txt-pg3");
    if (currentFilename === "index.html") {
      html.setAttribute("lang", "en");
      home.innerText = data.home_desk.en;
      about.innerText = data.about_desk.en;
      rasp.innerText = data.raspberries_desk.en;
      black.innerText = data.blackberries_desk.en;
      agrr.innerText = data.aggr_desk.en;
      contact.innerText = data.contact_desk.en;
      homeM.innerText = data.home_mob.en;
      aboutM.innerText = data.about_mob.en;
      raspM.innerText = data.raspberries_mob.en;
      blackM.innerText = data.blackberries_mob.en;
      agrrM.innerText = data.aggr_mob.en;
      constactM.innerText = data.contact_mob.en;
      title.innerText = data.title_index.en;
      description.setAttribute("content", data.description_index.en);
      keywords.setAttribute("content", data.keywords_index.en);
      /**about section */
      headingTxt.innerText = data.heading_txt.en;
      headingBtn.innerText = data.heading_btn.en;
      knowUs.innerText = data.know_us.en;
      knowUsTxt.innerText = data.know_us_txt.en;
      storage.innerText = data.storage.en;
      storageTxt.innerText = data.storage_txt.en;
      quality.innerText = data.quality.en;
      qualityTxt.innerText = data.quality_txt.en;
      industry.innerText = data.industry.en;
      industryTxt.innerText = data.industry_txt.en;
      goals.innerText = data.goals.en;
      goalsTxt.innerText = data.goals_txt.en;
      raspHeader.innerText = data.rasp_h2.en;
      raspTxt.innerText = data.rasp_txt.en;
      raspBtn.innerText = data.rasp_btn.en;
      raspContact.innerText = data.rasp_contact.en;
      blackHeading.forEach((heading) => {
        heading.innerText = data.bb_h2.en;
      });
      bbTxt.innerText = data.bb_txt.en;
      bbBtn.innerText = data.bb_btn.en;
      aggHeading.forEach((heading) => {
        heading.innerText = data.agg_h2.en;
      });
      apTxt.innerText = data.ap_txt.en;
      pharmacyBtn.innerText = data.ap_btn.en;
      contactHeading.innerText = data.contact_h2.en;
      contactSub.innerText = data.contact_sub.en;
      instaTxt.innerText = data.insta_txt.en;
      emailBtn.innerText = data.email_btn.en;
      footerTxt.innerText = data.footer_txt.en;
    } else if (currentFilename === "pharmacyPage.html") {
      html.setAttribute("lang", "en");
      contactHeading.innerText = data.contact_h2.en;
      contactSub.innerText = data.contact_sub.en;
      instaTxt.innerText = data.insta_txt.en;
      emailBtn.innerText = data.email_btn.en;
      title.innerText = data.title_pharm.en;
      description.setAttribute("content", data.pharm_desc.en);
      keywords.setAttribute("content", data.pharm_key.en);
      homePharm.innerText = data.home_pharm.en;
      raspPharm.innerText = data.rasp_pharm.en;
      agrHeading.innerText = data.agr_h1.en;
      footerTxt.innerText = data.footer_txt.en;
      pharmTxtAgr.innerText = data.pharm_txt_agr.en;
      summary.forEach((word) => {
        word.innerText = data.summary.en;
      });
      basfP.innerText = data.basf_p.en;
      fitofertP.innerText = data.fitofert_p.en;
      glifomarkP.innerText = data.glifomark_p.en;
      lunaP.innerText = data.luna_p.en;
      saturnP.innerText = data.saturn_p.en;
      tepekkiP.innerText = data.tepekki_p.en;
      thanksP.innerText = data.thanks_p.en;
      instaHref.innerText = data.insta_href.en;
      thanksAgain.innerText = data.thanks_again.en;
    } else if (currentFilename === "raspberryPage.html") {
      html.setAttribute("lang", "en");
      contactHeading.innerText = data.contact_h2.en;
      contactSub.innerText = data.contact_sub.en;
      instaTxt.innerText = data.insta_txt.en;
      emailBtn.innerText = data.email_btn.en;
      footerTxt.innerText = data.footer_txt.en;
      title.innerText = data.rasp_title.en;
      description.setAttribute("content", data.rasp_desc.en);
      keywords.setAttribute("content", data.rasp_key.en);
      raspHomeLink.innerText = data.rasp_home_link.en;
      raspToBb.innerText = data.rasp_to_bb.en;
      raspTxt1.innerText = data.rasp_txt_1.en;
      raspTxt2.innerText = data.rasp_txt_2.en;
      raspTxt3.innerText = data.rasp_txt_3.en;
      raspH1.innerHTML = data.rasp_h1.en;
    } else if (currentFilename === "blackberryPage.html") {
      html.setAttribute("lang", "en");
      contactHeading.innerText = data.contact_h2.en;
      contactSub.innerText = data.contact_sub.en;
      instaTxt.innerText = data.insta_txt.en;
      emailBtn.innerText = data.email_btn.en;
      footerTxt.innerText = data.footer_txt.en;
      title.innerText = data.black_title.en;
      description.setAttribute("content", data.black_desc.en);
      keywords.setAttribute("content", data.black_key.en);
      blackHomeLink.innerText = data.black_home_link.en;
      bbToAp.innerText = data.black_to_ap.en;
      bbTxt1.innerText = data.black_txt_1.en;
      bbTxt2.innerText = data.black_txt_2.en;
      bbTxt3.innerText = data.black_txt_3.en;
      blackH1.innerText = data.black_h1.en;
    }
    /**navigation and head */
  }
});

srbLang.forEach((btn) => {
  btn.addEventListener("click", () => {
    fetch("translate.json")
      .then((response) => response.json())
      .then((serbianData) => {
        const currentFilename = location.pathname.split("/").pop();
        const title = document.querySelector("title");
        const description = document.querySelector('meta[name="description"]');
        const keywords = document.querySelector('meta[name="keywords"]');
        const html = document.querySelector("html");
        const home = document.querySelector(".home");
        const about = document.querySelector(".about");
        const rasp = document.querySelector(".rasp");
        const black = document.querySelector(".black");
        const agrr = document.querySelector(".agrr");
        const contact = document.querySelector(".cont");
        const homeM = document.querySelector(".home-m");
        const aboutM = document.querySelector(".about-m");
        const raspM = document.querySelector(".rasp-m");
        const blackM = document.querySelector(".black-m");
        const agrrM = document.querySelector(".agrr-m");
        const constactM = document.querySelector(".contact-m");
        const headingTxt = document.querySelector(".heading-txt");
        const headingBtn = document.querySelector(".heading-btn");
        const knowUs = document.querySelector(".know-us");
        const knowUsTxt = document.querySelector(".know-us-txt");
        const storage = document.querySelector(".storage");
        const storageTxt = document.querySelector(".storage-txt");
        const quality = document.querySelector(".quality-h3");
        const qualityTxt = document.querySelector(".quality-txt");
        const industry = document.querySelector(".industry-h3");
        const industryTxt = document.querySelector(".industry-txt");
        const goals = document.querySelector(".goals-h3");
        const goalsTxt = document.querySelector(".goals-txt");
        const raspHeader = document.querySelector(".rasp-h2");
        const raspTxt = document.querySelector(".rasp-txt");
        const raspBtn = document.querySelector(".raspberry-btn");
        const raspContact = document.querySelector(".rasp-contact");
        const blackHeading = document.querySelectorAll(".black");
        const bbTxt = document.querySelector(".bb-txt");
        const bbBtn = document.querySelector(".blackberry-btn");
        const aggHeading = document.querySelectorAll(".agg");
        const apTxt = document.querySelector(".ap-txt");
        const pharmacyBtn = document.querySelector(".pharmacy-btn");
        const contactHeading = document.querySelector(".contact-h2");
        const contactSub = document.querySelector(".substring-cont");
        const instaTxt = document.querySelector(".insta-txt");
        const emailBtn = document.querySelector(".email-btn");
        const footerTxt = document.querySelector(".footer-txt");
        /**Pharmacy page */
        const homePharm = document.querySelector(".home-pharm");
        const raspPharm = document.querySelector(".rasp-pharm");
        const agrHeading = document.querySelector(".agr-h1");
        const pharmTxtAgr = document.querySelector(".pharm-txt-agr");
        const summary = document.querySelectorAll("summary");
        const basfP = document.querySelector(".basf-p");
        const fitofertP = document.querySelector(".fitofert-p");
        const glifomarkP = document.querySelector(".glifomark-p");
        const lunaP = document.querySelector(".luna-p");
        const saturnP = document.querySelector(".saturn-p");
        const tepekkiP = document.querySelector(".tepekki-p");
        const instaHref = document.querySelector(".insta-href");
        const thanksP = document.querySelector(".thanks-p");
        const thanksAgain = document.querySelector(".thanks-again");
        const raspHomeLink = document.querySelector(".rasp-home-link");
        const raspToBb = document.querySelector(".rasp-to-bb");
        const raspTxt1 = document.querySelector(".rasp-txt-pg");
        const raspTxt2 = document.querySelector(".rasp-txt-pg2");
        const raspTxt3 = document.querySelector(".rasp-txt-pg3");
        const raspH1 = document.querySelector(".rasp-h1");
        const blackH1 = document.querySelector(".bb-b-h1");
        const blackHomeLink = document.querySelector(".black-home-link");
        const bbToAp = document.querySelector(".bb-to-ap");
        const bbTxt1 = document.querySelector(".bb-txt-pg");
        const bbTxt2 = document.querySelector(".bb-txt-pg2");
        const bbTxt3 = document.querySelector(".bb-txt-pg3");
        /**navigation and head */
        html.setAttribute("lang", "sr");
        home.innerText = serbianData.home_desk.sr;
        about.innerText = serbianData.about_desk.sr;
        rasp.innerText = serbianData.raspberries_desk.sr;
        black.innerText = serbianData.blackberries_desk.sr;
        agrr.innerText = serbianData.aggr_desk.sr;
        contact.innerText = serbianData.contact_desk.sr;
        homeM.innerText = serbianData.home_mob.sr;
        aboutM.innerText = serbianData.about_mob.sr;
        raspM.innerText = serbianData.raspberries_mob.sr;
        blackM.innerText = serbianData.blackberries_mob.sr;
        agrrM.innerText = serbianData.aggr_mob.sr;
        constactM.innerText = serbianData.contact_mob.sr;
        title.innerText = serbianData.title_index.sr;
        description.setAttribute("content", serbianData.description_index.sr);
        keywords.setAttribute("content", serbianData.keywords_index.sr);

        /**about section */
        headingTxt.innerText = serbianData.heading_txt.sr;
        headingBtn.innerText = serbianData.heading_btn.sr;
        knowUs.innerText = serbianData.know_us.sr;
        knowUsTxt.innerText = serbianData.know_us_txt.sr;
        storage.innerText = serbianData.storage.sr;
        storageTxt.innerText = serbianData.storage_txt.sr;
        quality.innerText = serbianData.quality.sr;
        qualityTxt.innerText = serbianData.quality_txt.sr;
        industry.innerText = serbianData.industry.sr;
        industryTxt.innerText = serbianData.industry_txt.sr;
        goals.innerText = serbianData.goals.sr;
        goalsTxt.innerText = serbianData.goals_txt.sr;
        raspHeader.innerText = serbianData.rasp_h2.sr;
        raspTxt.innerText = serbianData.rasp_txt.sr;
        raspBtn.innerText = serbianData.rasp_btn.sr;
        raspContact.innerText = serbianData.rasp_contact.sr;
        blackHeading.forEach((heading) => {
          heading.innerText = serbianData.bb_h2.sr;
        });
        bbTxt.innerText = serbianData.bb_txt.sr;
        bbBtn.innerText = serbianData.bb_btn.sr;
        aggHeading.forEach((heading) => {
          heading.innerText = serbianData.agg_h2.sr;
        });
        apTxt.innerText = serbianData.ap_txt.sr;
        pharmacyBtn.innerText = serbianData.ap_btn.sr;
        contactHeading.innerText = serbianData.contact_h2.sr;
        contactSub.innerText = serbianData.contact_sub.sr;
        instaTxt.innerText = serbianData.insta_txt.sr;
        emailBtn.innerText = serbianData.email_btn.sr;
        footerTxt.innerText = serbianData.footer_txt.sr;
        /**Pharmacy page */
        if (currentFilename === "pharmacyPage.html") {
          title.innerText = serbianData.title_pharm.sr;
          description.setAttribute("content", serbianData.pharm_desc.sr);
          keywords.setAttribute("content", serbianData.pharm_key.sr);
          homePharm.innerText = serbianData.home_pharm.sr;
          raspPharm.innerText = serbianData.rasp_pharm.sr;
          agrHeading.innerText = serbianData.agr_h1.sr;
          pharmTxtAgr.innerText = serbianData.pharm_txt_agr.sr;
          summary.forEach((word) => {
            word.innerText = serbianData.summary.sr;
          });
          basfP.innerText = serbianData.basf_p.sr;
          fitofertP.innerText = serbianData.fitofert_p.sr;
          glifomarkP.innerText = serbianData.glifomark_p.sr;
          lunaP.innerText = serbianData.luna_p.sr;
          saturnP.innerText = serbianData.saturn_p.sr;
          tepekkiP.innerText = serbianData.tepekki_p.sr;
          thanksP.innerText = serbianData.thanks_p.sr;
          instaHref.innerText = serbianData.insta_href.sr;
          thanksAgain.innerText = serbianData.thanks_again.sr;
        } else if (currentFilename === "raspberryPage.html") {
          title.innerText = serbianData.rasp_title.sr;
          description.setAttribute("content", serbianData.rasp_desc.sr);
          keywords.setAttribute("content", serbianData.rasp_key.sr);
          raspHomeLink.innerText = serbianData.rasp_home_link.sr;
          raspToBb.innerText = serbianData.rasp_to_bb.sr;
          raspTxt1.innerText = serbianData.rasp_txt_1.sr;
          raspTxt2.innerText = serbianData.rasp_txt_2.sr;
          raspTxt3.innerText = serbianData.rasp_txt_3.sr;
          raspH1.innerText = serbianData.rasp_h1.sr;
        } else if (currentFilename === "blackberryPage.html") {
          title.innerText = serbianData.black_title.sr;
          description.setAttribute("content", serbianData.black_desc.sr);
          keywords.setAttribute("content", serbianData.black_key.sr);
          blackHomeLink.innerText = serbianData.black_home_link.sr;
          bbToAp.innerText = serbianData.black_to_ap.sr;
          bbTxt1.innerText = serbianData.black_txt_1.sr;
          bbTxt2.innerText = serbianData.black_txt_2.sr;
          bbTxt3.innerText = serbianData.black_txt_3.sr;
          blackH1.innerText = serbianData.black_h1.sr;
        }

        localStorage.removeItem("en");
        localStorage.setItem("sr", JSON.stringify(serbianData));
      });
  });
});

engLang.forEach((btn) => {
  btn.addEventListener("click", () => {
    fetch("translate.json")
      .then((response) => response.json())
      .then((data) => {
        const currentFilename = location.pathname.split("/").pop();
        const title = document.querySelector("title");
        const description = document.querySelector('meta[name="description"]');
        const keywords = document.querySelector('meta[name="keywords"]');
        const html = document.querySelector("html");
        const home = document.querySelector(".home");
        const about = document.querySelector(".about");
        const rasp = document.querySelector(".rasp");
        const black = document.querySelector(".black");
        const agrr = document.querySelector(".agrr");
        const contact = document.querySelector(".cont");
        const homeM = document.querySelector(".home-m");
        const aboutM = document.querySelector(".about-m");
        const raspM = document.querySelector(".rasp-m");
        const blackM = document.querySelector(".black-m");
        const agrrM = document.querySelector(".agrr-m");
        const constactM = document.querySelector(".contact-m");
        const headingTxt = document.querySelector(".heading-txt");
        const headingBtn = document.querySelector(".heading-btn");
        const knowUs = document.querySelector(".know-us");
        const knowUsTxt = document.querySelector(".know-us-txt");
        const storage = document.querySelector(".storage");
        const storageTxt = document.querySelector(".storage-txt");
        const quality = document.querySelector(".quality-h3");
        const qualityTxt = document.querySelector(".quality-txt");
        const industry = document.querySelector(".industry-h3");
        const industryTxt = document.querySelector(".industry-txt");
        const goals = document.querySelector(".goals-h3");
        const goalsTxt = document.querySelector(".goals-txt");
        const raspHeader = document.querySelector(".rasp-h2");
        const raspTxt = document.querySelector(".rasp-txt");
        const raspBtn = document.querySelector(".raspberry-btn");
        const raspContact = document.querySelector(".rasp-contact");
        const blackHeading = document.querySelectorAll(".black");
        const bbTxt = document.querySelector(".bb-txt");
        const bbBtn = document.querySelector(".blackberry-btn");
        const aggHeading = document.querySelectorAll(".agg");
        const apTxt = document.querySelector(".ap-txt");
        const pharmacyBtn = document.querySelector(".pharmacy-btn");
        const contactHeading = document.querySelector(".contact-h2");
        const contactSub = document.querySelector(".substring-cont");
        const instaTxt = document.querySelector(".insta-txt");
        const emailBtn = document.querySelector(".email-btn");
        const footerTxt = document.querySelector(".footer-txt");
        /**Pharmacy page */
        const homePharm = document.querySelector(".home-pharm");
        const raspPharm = document.querySelector(".rasp-pharm");
        const agrHeading = document.querySelector(".agr-h1");
        const pharmTxtAgr = document.querySelector(".pharm-txt-agr");
        const summary = document.querySelectorAll("summary");
        const basfP = document.querySelector(".basf-p");
        const fitofertP = document.querySelector(".fitofert-p");
        const glifomarkP = document.querySelector(".glifomark-p");
        const lunaP = document.querySelector(".luna-p");
        const saturnP = document.querySelector(".saturn-p");
        const tepekkiP = document.querySelector(".tepekki-p");
        const instaHref = document.querySelector(".insta-href");
        const thanksP = document.querySelector(".thanks-p");
        const thanksAgain = document.querySelector(".thanks-again");
        const raspHomeLink = document.querySelector(".rasp-home-link");
        const raspToBb = document.querySelector(".rasp-to-bb");
        const raspTxt1 = document.querySelector(".rasp-txt-pg");
        const raspTxt2 = document.querySelector(".rasp-txt-pg2");
        const raspTxt3 = document.querySelector(".rasp-txt-pg3");
        const raspH1 = document.querySelector(".rasp-h1");
        const blackH1 = document.querySelector(".bb-b-h1");
        const blackHomeLink = document.querySelector(".black-home-link");
        const bbToAp = document.querySelector(".bb-to-ap");
        const bbTxt1 = document.querySelector(".bb-txt-pg");
        const bbTxt2 = document.querySelector(".bb-txt-pg2");
        const bbTxt3 = document.querySelector(".bb-txt-pg3");

        /**navigation and head */
        html.setAttribute("lang", "en");
        home.innerText = data.home_desk.en;
        about.innerText = data.about_desk.en;
        rasp.innerText = data.raspberries_desk.en;
        black.innerText = data.blackberries_desk.en;
        agrr.innerText = data.aggr_desk.en;
        contact.innerText = data.contact_desk.en;
        homeM.innerText = data.home_mob.en;
        aboutM.innerText = data.about_mob.en;
        raspM.innerText = data.raspberries_mob.en;
        blackM.innerText = data.blackberries_mob.en;
        agrrM.innerText = data.aggr_mob.en;
        constactM.innerText = data.contact_mob.en;
        title.innerText = data.title_index.en;
        description.setAttribute("content", data.description_index.en);
        keywords.setAttribute("content", data.keywords_index.en);
        /**about section */
        headingTxt.innerText = data.heading_txt.en;
        headingBtn.innerText = data.heading_btn.en;
        knowUs.innerText = data.know_us.en;
        knowUsTxt.innerText = data.know_us_txt.en;
        storage.innerText = data.storage.en;
        storageTxt.innerText = data.storage_txt.en;
        quality.innerText = data.quality.en;
        qualityTxt.innerText = data.quality_txt.en;
        industry.innerText = data.industry.en;
        industryTxt.innerText = data.industry_txt.en;
        goals.innerText = data.goals.en;
        goalsTxt.innerText = data.goals_txt.en;
        raspHeader.innerText = data.rasp_h2.en;
        raspTxt.innerText = data.rasp_txt.en;
        raspBtn.innerText = data.rasp_btn.en;
        raspContact.innerText = data.rasp_contact.en;
        blackHeading.forEach((heading) => {
          heading.innerText = data.bb_h2.en;
        });
        bbTxt.innerText = data.bb_txt.en;
        bbBtn.innerText = data.bb_btn.en;
        aggHeading.forEach((heading) => {
          heading.innerText = data.agg_h2.en;
        });
        apTxt.innerText = data.ap_txt.en;
        pharmacyBtn.innerText = data.ap_btn.en;
        contactHeading.innerText = data.contact_h2.en;
        contactSub.innerText = data.contact_sub.en;
        instaTxt.innerText = data.insta_txt.en;
        emailBtn.innerText = data.email_btn.en;
        footerTxt.innerText = data.footer_txt.en;
        if (currentFilename === "pharmacyPage.html") {
          title.innerText = data.title_pharm.en;
          description.setAttribute("content", data.pharm_desc.en);
          keywords.setAttribute("content", data.pharm_key.en);
          homePharm.innerText = data.home_pharm.en;
          raspPharm.innerText = data.rasp_pharm.en;
          agrHeading.innerText = data.agr_h1.en;
          pharmTxtAgr.innerText = data.pharm_txt_agr.en;
          summary.forEach((word) => {
            word.innerText = data.summary.en;
          });
          basfP.innerText = data.basf_p.en;
          fitofertP.innerText = data.fitofert_p.en;
          glifomarkP.innerText = data.glifomark_p.en;
          lunaP.innerText = data.luna_p.en;
          saturnP.innerText = data.saturn_p.en;
          tepekkiP.innerText = data.tepekki_p.en;
          thanksP.innerText = data.thanks_p.en;
          instaHref.innerText = data.insta_href.en;
          thanksAgain.innerText = data.thanks_again.en;
        } else if (currentFilename === "raspberryPage.html") {
          title.innerText = data.rasp_title.en;
          description.setAttribute("content", data.rasp_desc.en);
          keywords.setAttribute("content", data.rasp_key.en);
          raspHomeLink.innerText = data.rasp_home_link.en;
          raspToBb.innerText = data.rasp_to_bb.en;
          raspTxt1.innerText = data.rasp_txt_1.en;
          raspTxt2.innerText = data.rasp_txt_2.en;
          raspTxt3.innerText = data.rasp_txt_3.en;
          raspH1.innerText = data.rasp_h1.en;
        } else if (currentFilename === "blackberryPage.html") {
          title.innerText = data.black_title.en;
          description.setAttribute("content", data.black_desc.en);
          keywords.setAttribute("content", data.black_key.en);
          blackHomeLink.innerText = data.black_home_link.en;
          bbToAp.innerText = data.black_to_ap.en;
          bbTxt1.innerText = data.black_txt_1.en;
          bbTxt2.innerText = data.black_txt_2.en;
          bbTxt3.innerText = data.black_txt_3.en;
          blackH1.innerText = data.black_h1.en;
        }
        localStorage.removeItem("sr");
        localStorage.setItem("en", JSON.stringify(data));
      });
  });
});
