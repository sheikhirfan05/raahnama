// Automatically update the year in the footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Offset for sticky header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
const hunzaFact = "https://www.google.com/search?q=hunza+valley&oq=hunza+valley&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyCQgCEEUYOxiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM3ODJqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8";
const skarduFact = "https://www.google.com/search?q=skardu&sca_esv=a4ac375be92b09b0&sxsrf=APpeQnswCV6JfdJtH3VPMpyBwr_2xd_0lQ%3A1787817131422&ei=q-yPaoagGdqskdUPjc22sQs&biw=1536&bih=703&ved=0ahUKEwjGoaroqcCWAxVaVqQEHY2mLbYQ4dUDCBA&uact=5&oq=skardu&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnNrYXJkdTIKECMYyQIY8AUYJzINEC4YQxixAxiABBiKBTIKEAAYgAQYFBiHAjIFEAAYgAQyDhAuGIAEGLEDGMcBGK8BMgUQABiABDIFEAAYgAQyCBAAGIAEGLEDMgUQABiABDIKEAAYgAQYigUYQzIcEC4YQxixAxiABBiKBRiXBRjcBBjeBBjgBNgBAUicHVDoCljPG3ACeAGQAQGYAfIBoAHnCqoBAzItNrgBA8gBAPgBAZgCB6AC9QmoAhLCAg0QIxjwBRjJAhiwAxgnwgIKEAAYRxjWBBiwA8ICDRAuGIAEGIoFGEMYsAPCAg0QABiABBiKBRhDGLADwgITEC4YgAQYigUYQxjHARivARiwA8ICDhAAGOQCGNYEGLAD2AEBwgIXEC4Y3AYYuAYY2gYY2AIYyAMYsAPYAQHCAgcQIxjqAhgnwgIZEC4YgAQYigUYQxjnBhjIAxjqAhi0AtgBAcICChAjGPAFGMkCGCfCAgQQIxgnwgIKEC4YQxiABBiKBcICChAuGIAEGIoFGEPCAhAQLhiABBiKBRhDGMcBGNEDwgIQEC4YgAQYigUYQxjHARivAcICExAuGIAEGIoFGEMYsQMYxwEY0QPCAg0QABiABBiKBRhDGLEDwgITEC4YgAQYigUYQxixAxjHARivAZgDDfEFGzjN4Nwd9KqIBgGQBhO6BgYIARABGAmSBwUyLjAuNaAH10WyBwMyLTW4B9cJwgcDMy03yAdigAgB&sclient=gws-wiz-serp";
const sawatFact = "https://www.google.com/search?q=swat+valley&sca_esv=a4ac375be92b09b0&biw=1536&bih=703&sxsrf=APpeQnsDErwLIEhqRzaSaPyQdW99Kw3-yQ%3A1787817521344&ei=Me6Papm4FJ3s7M8PzregkAU&ved=0ahUKEwjZlKGiq8CWAxUdNvsDHc4bCFIQ4dUDCBA&uact=5&oq=swat+valley&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3N3YXQgdmFsbGV5MgoQIxjJAhjwBRgnMgUQABiABDIIEC4YsQMYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKQkUJAFWO8icAR4AZABAJgBygKgAYIWqgEGMi0xMS4xuAEDyAEA-AEBmAIQoALmF6gCD8ICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhcQLhjYAhi4BhjaBhjcBhjIAxiwA9gBAcICFxAuGNwGGLgGGNoGGNgCGMgDGLAD2AEBwgIHECMY6gIYJ8ICGRAuGEMYgAQYigUY5wYYyAMY6gIYtALYAQHCAhkQLhiABBiKBRhDGOcGGMgDGOoCGLQC2AEBwgIEECMYJ8ICChAjGPAFGMkCGCfCAgoQLhhDGIAEGIoFwgIKEAAYgAQYigUYQ8ICChAuGIAEGIoFGEPCAg0QLhhDGLEDGIAEGIoFwgINEAAYgAQYigUYQxixA8ICDRAuGBQYhwIYsQMYgATCAgcQLhiABBgKwgIJEAAYgAQYChgLwgIJEC4YChgLGIAEwgIKEC4YFBiHAhiABMICChAAGIAEGBQYhwLCAgwQABiABBgKGAsYsQOYAw_xBcsMq1HV7pIIiAYBkAYTugYGCAEQARgJkgcINC4wLjExLjGgB-pxsgcGMi0xMS4xuAevF8IHBjItMy4xM8gHuwGACAE&sclient=gws-wiz-serp";
const tourImage1 = document.querySelector(".tour-image1");
const tourImage2 = document.querySelector(".tour-image2");
const tourImage3 = document.querySelector(".tour-image3");
tourImage1.addEventListener('click', () => {
    window.open(hunzaFact, "_black");
})
tourImage2.addEventListener('click', () => {
    window.open(skarduFact, "_black");
})
tourImage3.addEventListener('click', () => {
    window.open(sawatFact, "_black");
})
