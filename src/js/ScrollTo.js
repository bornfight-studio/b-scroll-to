/**
 * b-scroll-to v 1.0.4
 * Author: Bornfight Studio
 * Repo: https://github.com/bornfight-studio/b-scroll-to
 *
 * Year: 2020
 */

import gsap from "gsap";

export default class ScrollTo {
    constructor(options) {
        const _defaults = {
            ease: "power3.inOut",
            duration: 1
        };

        this.defaults = Object.assign({}, _defaults, options);

        this.anchors = document.querySelectorAll("[data-scroll-to]");
        this.document = document.documentElement || document.body;

        if (this.anchors.length > 0) {
            this.anchors.forEach(anchor => {
                this.anchorController(anchor);
            });
        }
    }

    /**
     *
     * @param {Element || HTMLElement} anchor
     */
    anchorController(anchor) {
        const target = document.querySelector(`${anchor.dataset.scrollTo}`);
        const offset = parseInt(anchor.dataset.offset) || 0;

        if (target == null) {
            console.error(`Target element (${anchor.dataset.scrollTo}) missing`);
            return;
        }

        anchor.addEventListener('click', (ev) => {
            ev.preventDefault();

            let offsetTop = target.getBoundingClientRect().top + window.scrollY;

            gsap.to(this.document, {
                duration: this.defaults.duration,
                scrollTop: offsetTop + offset,
                ease: this.defaults.ease
            })
        });
    }
}

