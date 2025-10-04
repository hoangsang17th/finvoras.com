import { cva, type VariantProps } from "class-variance-authority";
import { COMPONENT_SIZES, BORDER_RADIUS, A11Y } from "../../constants/design-system";

/**
 * Button style variants using CVA (Class Variance Authority)
 */
export const buttonVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center",
    "font-medium text-sm",
    "transition-all duration-200 ease-in-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "relative overflow-hidden",
    "whitespace-nowrap",
    // Remove browser default outline and focus ring
    "outline-none focus:outline-none",
    // Remove touch highlight on mobile
    "touch-manipulation",
    // Remove user select to prevent text selection on long press
    "select-none",
    // Optional: Add subtle focus indicator if needed for accessibility
    // "focus:ring-2 focus:ring-offset-2 focus:ring-gray-300",
  ],
  {
    variants: {
      variant: {
        // Primary: Nền màu chính cam Finvoras, chữ trắng, border tròn
        primary: [
          "bg-brand-primary text-white",
          "rounded-full",
          "hover:bg-brand-primary-600 hover:scale-[1.02]",
          "active:bg-brand-primary-700 active:scale-[0.98]",
          "shadow-md hover:shadow-lg",
          "border-0",
          "disabled:opacity-50 disabled:pointer-events-none",
        ],
        // Outline: Nền trong suốt, viền xám nhạt, chữ tối
        secondary: [
          "bg-transparent text-brand-neutral-600",
          "border-2 border-brand-neutral-200",
          "rounded-full",
          "hover:bg-gray-50 hover:border-brand-neutral-300",
          "active:bg-gray-100",
          "transition-all duration-200 ease-in-out",
          "disabled:opacity-50 disabled:pointer-events-none",
          "disabled:hover:bg-transparent",
        ],
        // Default: Nền xám nhạt, chữ tối, hover có viền và hiệu ứng nổi bật
        default: [
          "bg-gray-100 text-gray-700",
          "border border-transparent",
          "rounded-full",
          "hover:border-gray-300 hover:bg-gray-200 hover:shadow-sm",
          "active:bg-gray-300",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:pointer-events-none",
          "disabled:hover:border-transparent disabled:hover:bg-gray-100",
        ],
        // Link: Không nền, không viền, chữ xanh Finvoras có gạch dưới
        link: [
          "bg-transparent text-brand-blue",
          "border-0 px-3", // Giảm padding cho link từ px-4 xuống px-3
          "underline decoration-1 underline-offset-2",
          "hover:text-brand-blue-700 hover:no-underline",
          "active:text-brand-blue-800",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:pointer-events-none",
          "whitespace-nowrap text-left",
          "min-h-0 h-auto py-1", // Giảm vertical padding từ py-2 xuống py-1
          // Support for dark backgrounds
          "dark:text-white dark:hover:text-brand-blue-100",
        ],
      },
      size: {
        sm: [
          "h-8 text-xs gap-1",
          "px-[1.25rem]", // 20px padding - giảm từ 24px
          "min-w-[2rem]",
          // Responsive: giới hạn chiều rộng hợp lý
          "max-w-[6rem] xs:max-w-[8rem] sm:max-w-none",
        ],
        md: [
          "h-10 py-2 gap-2",
          "px-[1.5rem]", // 24px padding - giảm từ 32px
          "min-w-[2.5rem]",
          // Responsive: giới hạn chiều rộng phù hợp cho mobile
          "max-w-[8rem] xs:max-w-[10rem] sm:max-w-none",
        ],
        lg: [
          "h-12 text-base gap-2",
          "px-[2rem]", // 32px padding - giảm từ 40px cho vừa phải hơn
          "min-w-[3rem]",
          "max-w-[10rem] xs:max-w-[12rem] sm:max-w-none",
        ],
        icon: [
          "h-10 w-10 p-0", // Icon buttons có p-0 để centering
          "aspect-square gap-0",
          "min-w-[2.5rem] max-w-[2.5rem]",
        ],
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      // Icon size adjustments
      {
        size: "sm",
        className: "w-8 h-8", // Không có p-0
      },
      {
        size: "md",
        className: "w-10 h-10", // Không có p-0
      },
      {
        size: "lg",
        className: "w-12 h-12", // Không có p-0
      },
      // Icon-only buttons need p-0 for centering
      {
        size: "icon",
        className: "w-10 h-10 p-0",
      },
      // Link variant size adjustments - chỉ set height, giữ padding từ size
      {
        variant: "link",
        size: "sm",
        className: "h-auto text-xs", // Không có px-4
      },
      {
        variant: "link",
        size: "md",
        className: "h-auto text-sm", // Không có px-4
      },
      {
        variant: "link",
        size: "lg",
        className: "h-auto text-base", // Không có px-4
      },
      // Link với icon (để icon không bị margin)
      {
        variant: "link",
        className: "gap-1",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      fullWidth: false,
      disabled: false,
    },
  }
);

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;