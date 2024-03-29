import DeadlineDropdown from "@/components/commons/DropDowns/DeadlineDropdown/DeadlineDropdown";
import Dropdown from "@/components/commons/DropDowns/Dropdown";
import MultiselectDropdown from "@/components/commons/DropDowns/StackMultiselectDropdown";
import QuillEditor from "@/components/commons/ReactQuill";
import SelectPositionChipList from "@/components/commons/SelectPositionChipList";
import * as S from "./RecruitLayout.styled";
import { DROPDOWN_FORM_INFO } from "@/constants/dropDown";
import { RecruitApiRequestDto } from "@/lib/api/post/type";
import { format } from "date-fns";
import LinkInput from "./LinkInput";
import Button from "../Button";
import { useForm, Controller } from "react-hook-form";

import {
  handleSelectPosition,
  handleRecruitFail,
  handleSelectStack,
  validateFormData,
} from "./utils";
import RadioButtonField from "./RadioButtonField";

interface RecruitmentRequestLayoutProps {
  mutationFn: any; // 교체예정입니다
  buttonText: string;
  selectedOptions: RecruitApiRequestDto;
  setSelectedOptions: React.Dispatch<React.SetStateAction<RecruitApiRequestDto>>;
}

export default function RecruitmentRequestLayout({
  selectedOptions,
  setSelectedOptions,
  buttonText,
  mutationFn,
}: RecruitmentRequestLayoutProps) {
  const {
    recruitment: { capacity, progressPeriod, progressWay, contactWay },
  } = DROPDOWN_FORM_INFO;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    if (validateFormData(errors)) {
      mutationFn.mutate(selectedOptions);
    }
  };

  return (
    <S.SelectContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>스터디/프로젝트 정보 입력</h1>
      <S.GirdContainer>
        <S.RadioButtonBox>
          <h3>
            모집 구분 <span>*</span>
          </h3>
          <span>
            <RadioButtonField name="type" value="STUDY" control={control} setSelectedOptions={setSelectedOptions} />
            <RadioButtonField name="type" value="PROJECT" control={control} setSelectedOptions={setSelectedOptions} />
          </span>
        </S.RadioButtonBox>
        <S.SelectBox>
          <h3>
            모집 마감 기간<span>*</span>
          </h3>
          <Controller
            name="recruitEndAt"
            defaultValue={selectedOptions.recruitEndAt}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <DeadlineDropdown
                  placeholder="모집 마감 기간"
                  onSelect={(option) => {
                    const formattedDate = format(option, "yyyy-MM-dd 23:59:59");
                    setSelectedOptions((prevOptions) => ({
                      ...prevOptions,
                      recruitEndAt: formattedDate,
                    }));
                    field.onChange(formattedDate);
                  }}
                  selectedOption={
                    selectedOptions.recruitEndAt ? format(new Date(selectedOptions.recruitEndAt), "yyyy.MM.dd") : ""
                  }
                />
                {errors.recruitEndAt && <p>모집 마감 기간을 선택해주세요.</p>}
              </>
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>진행 기간</h3>
          <Controller
            name="progressPeriod"
            control={control}
            defaultValue={selectedOptions.progressPeriod}
            render={({ field }) => (
              <Dropdown
                placeholder={"진행 기간"}
                options={progressPeriod}
                selectedOption={field.value}
                onSelect={(option) => {
                  setSelectedOptions((prevOption) => ({ ...prevOption, progressPeriod: option.label }));
                  field.onChange(option.value);
                }}
              />
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>모집 인원</h3>
          <Controller
            name="capacity"
            defaultValue={selectedOptions.capacity}
            control={control}
            render={({ field }) => (
              <Dropdown
                placeholder={"모집 인원"}
                options={capacity}
                selectedOption={field.value}
                onSelect={(option) => {
                  field.onChange(option.value);
                }}
              />
            )}
          />
        </S.SelectBox>
        <S.SelectBox>
          <h3>
            진행 방식<span>*</span>
          </h3>
          <Controller
            name="progressWay"
            defaultValue={selectedOptions.progressWay}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.DropdownWrapper>
                <Dropdown
                  placeholder={"진행 방식"}
                  options={progressWay}
                  selectedOption={selectedOptions.progressWay}
                  onSelect={(option) => {
                    setSelectedOptions((prevOption) => ({ ...prevOption, progressWay: option.label }));
                    field.onChange(option);
                  }}
                />
              </S.DropdownWrapper>
            )}
          />
          {errors.progressWay && <p>진행방식을 선택해주세요.</p>}
        </S.SelectBox>
        <S.SelectBox>
          <h3>연락 방법</h3>
          <Controller
            name="contactWay"
            defaultValue={selectedOptions.contactWay}
            control={control}
            render={({ field }) => (
              <Dropdown
                placeholder={"연락 방법"}
                options={contactWay}
                selectedOption={selectedOptions.contactWay}
                onSelect={(option) => {
                  setSelectedOptions((prevOption) => ({ ...prevOption, contactWay: option.label }));
                  field.onChange(option);
                }}
              />
            )}
          />

          {selectedOptions.contactWay !== "기타" && (
            <>
              <Controller
                name={selectedOptions.contactWay || ""}
                defaultValue={selectedOptions.link}
                control={control}
                rules={{
                  pattern: {
                    value:
                      selectedOptions.contactWay === "이메일"
                        ? /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
                        : /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})\/?([\w/#.-]*)*(\?[\w=&.-]*)?(#[\w-]*)?$/,
                    message:
                      selectedOptions.contactWay === "이메일"
                        ? "올바른 이메일 형식이 아닙니다."
                        : "올바른 url 형식이 아닙니다",
                  },
                }}
                render={({ field }) => (
                  <LinkInput
                    onBlur={field.onBlur}
                    selectedOption={selectedOptions.contactWay || ""}
                    onChange={(newLink) => {
                      setSelectedOptions((prevOption) => ({ ...prevOption, link: newLink }));
                      field.onChange(newLink);
                    }}
                  />
                )}
              />
              {selectedOptions.contactWay !== "기타" && errors[selectedOptions.contactWay] && (
                <p>{String(errors[selectedOptions.contactWay]?.message)}</p>
              )}
            </>
          )}
        </S.SelectBox>
      </S.GirdContainer>
      <S.SelectChipBox>
        <h3>기술 스택</h3>
        <Controller
          name="stacks"
          defaultValue={selectedOptions.stacks}
          control={control}
          render={({ field }) => (
            <MultiselectDropdown
              selectedOptions={selectedOptions.stacks}
              onSelectChange={(stack) => {
                handleSelectStack(stack, setSelectedOptions);
                field.onChange(stack);
              }}
            />
          )}
        />
      </S.SelectChipBox>
      <S.SelectChipBox>
        <h3>
          모집 포지션<span>*</span>
        </h3>
        <Controller
          name="positions"
          defaultValue={selectedOptions.positions}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <SelectPositionChipList
              selectedPositions={selectedOptions.positions}
              onChipClick={(selectedPosition) => {
                const updatedPositions = selectedOptions.positions.includes(selectedPosition)
                  ? selectedOptions.positions.filter((prevPosition) => prevPosition !== selectedPosition)
                  : [...selectedOptions.positions, selectedPosition];
                handleSelectPosition(updatedPositions, setSelectedOptions);
                field.onChange(updatedPositions);
              }}
            />
          )}
        />
        {errors.positions && <p>모집 포지션을 선택해주세요.</p>}
      </S.SelectChipBox>
      <S.QuillBox>
        <h1>스터디/프로젝트 소개</h1>
        <Controller
          name="title"
          defaultValue={selectedOptions.title}
          control={control}
          render={({ field }) => (
            <S.TitleInput
              placeholder="제목을 입력해주세요!"
              onChange={(e) => {
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  title: e.target.value,
                }));
                field.onChange(e);
              }}
              value={selectedOptions.title || ""}
            />
          )}
        />
        <Controller
          name="content"
          defaultValue={selectedOptions.content}
          control={control}
          render={({ field }) => (
            <QuillEditor
              onChange={(value) => {
                setSelectedOptions((prevOptions) => ({
                  ...prevOptions,
                  content: value,
                }));
                field.onChange(value);
              }}
            />
          )}
        />
      </S.QuillBox>
      <S.SubmitButtonBox>
        <Button variant="primaryLight">취소하기</Button>
        <Button
          variant="primary"
          onClick={() => {
            handleRecruitFail(errors);
          }}>
          {buttonText}
        </Button>
      </S.SubmitButtonBox>
    </S.SelectContainer>
  );
}
